import { supabaseAdmin } from '@/lib/supabaseAdmin'
import { v4 as uuidv4 } from 'uuid'

export async function GET() {
  const { data, error } = await supabaseAdmin
    .from('blogs')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) return Response.json({ error: error.message }, { status: 500 })
  return Response.json(data)
}

export async function POST(request) {
  try {
    const formData = await request.formData()
    const title = formData.get('title')
    const excerpt = formData.get('excerpt')
    const category = formData.get('category')
    const author = formData.get('author')
    const status = formData.get('status') || 'draft'
    const content = formData.get('content')
    const image = formData.get('image')

    // ✅ 1. Validation
    if (!title || !title.trim()) {
      return Response.json({ error: 'Title is required' }, { status: 400 })
    }

    if (!content) {
      return Response.json({ error: 'Content is required' }, { status: 400 })
    }

    let parsedContent
    try {
      parsedContent = JSON.parse(content)
      if (!parsedContent.blocks || !Array.isArray(parsedContent.blocks)) {
        return Response.json({ error: 'Invalid content format' }, { status: 400 })
      }
      if (parsedContent.blocks.length === 0) {
        return Response.json({ error: 'Content cannot be empty' }, { status: 400 })
      }
    } catch (parseError) {
      console.error('Content parse error:', parseError)
      return Response.json({ error: 'Invalid JSON content' }, { status: 400 })
    }

    let imageUrl = null
    if (image && image.name && image.size > 0) {
      try {
        const fileName = `${uuidv4()}-${image.name}`
        const { data: uploadData, error: uploadError } = await supabaseAdmin.storage
          .from('blog-images')
          .upload(fileName, image, {
            cacheControl: '3600',
            upsert: false,
          })

        if (uploadError) throw uploadError

        const { data: publicUrl } = supabaseAdmin.storage
          .from('blog-images')
          .getPublicUrl(fileName)

        imageUrl = publicUrl.publicUrl
      } catch (uploadError) {
        console.error('Image upload error:', uploadError);
      }
    }

    // ✅ 4. Generate slug
    let slug = title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .substring(0, 100)

    // ✅ 5. Insert into Supabase
    const { data, error } = await supabaseAdmin
      .from('blogs')
      .insert([
        {
          title: title.trim(),
          excerpt: excerpt?.trim() || null,
          category: category?.trim() || null,
          author: author?.trim() || null,
          status,
          content: parsedContent,
          image_url: imageUrl,
          slug,
        },
      ])
      .select()

    // Handle duplicate slug
    if (error) {
      console.error('Supabase insert error:', error)
      if (error.code === '23505') {
        const uniqueSlug = `${slug}-${Date.now()}`
        const { data: retryData, error: retryError } = await supabaseAdmin
          .from('blogs')
          .insert([
            {
              title: title.trim(),
              excerpt: excerpt?.trim() || null,
              category: category?.trim() || null,
              author: author?.trim() || null,
              status,
              content: parsedContent,
              image_url: imageUrl,
              slug: uniqueSlug,
            },
          ])
          .select()

        if (retryError) throw retryError
        return Response.json({
          message: 'Blog created successfully',
          data: retryData[0],
        })
      }

      throw error
    }

    // ✅ 6. Return success
    return Response.json({
      message: 'Blog created successfully',
      data: data[0],
    })
  } catch (err) {
    console.error('Blog create error:', err)
    return Response.json(
      { error: err.message || 'Internal server error' },
      { status: 500 }
    )
  }
}