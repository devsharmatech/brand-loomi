import { supabaseAdmin } from '@/lib/supabaseAdmin'
import { v4 as uuidv4 } from 'uuid'


export async function GET(req, { params }) {
  const id = (await params).id
  const { data, error } = await supabaseAdmin.from('blogs').select('*').eq('id', id).single()
  if (error) return Response.json({ error: error.message }, { status: 500 })
  return Response.json(data)
}

export async function PUT(req, { params }) {
  try {
    const id = params.id
    const formData = await req.formData()

    const title = formData.get('title')
    const excerpt = formData.get('excerpt')
    const category = formData.get('category')
    const author = formData.get('author')
    const status = formData.get('status')
    const content = formData.get('content')
    const image = formData.get('image')

    // ✅ Validation
    if (title && !title.trim()) {
      return Response.json({ error: 'Title cannot be empty' }, { status: 400 })
    }

    let parsedContent
    if (content) {
      try {
        parsedContent = JSON.parse(content)
        if (!parsedContent.blocks || !Array.isArray(parsedContent.blocks)) {
          return Response.json({ error: 'Invalid content format' }, { status: 400 })
        }
      } catch (parseError) {
        return Response.json({ error: 'Invalid JSON content' }, { status: 400 })
      }
    }

    // ✅ Fetch existing blog to get old image URL
    const { data: existingBlog, error: fetchError } = await supabaseAdmin
      .from('blogs')
      .select('image_url')
      .eq('id', id)
      .single()
    if (fetchError) throw fetchError

    let imageUrl = existingBlog.image_url

    // ✅ Handle new image upload
    if (image && image.name && image.size > 0) {
      // Delete old image if it exists
      if (imageUrl) {
        const oldFilePath = imageUrl.split('/').pop() // get file name from URL
        const { error: deleteError } = await supabaseAdmin.storage
          .from('blog-images')
          .remove([oldFilePath])
        if (deleteError) console.error('Old image deletion error:', deleteError)
      }

      // Upload new image
      const fileName = `${uuidv4()}-${image.name}`
      const { data: uploadData, error: uploadError } = await supabaseAdmin.storage
        .from('blog-images')
        .upload(fileName, image, { cacheControl: '3600', upsert: false })

      if (uploadError) throw uploadError

      const { data: publicUrl } = supabaseAdmin.storage
        .from('blog-images')
        .getPublicUrl(fileName)

      imageUrl = publicUrl.publicUrl
    }

    // ✅ Prepare update object
    const updateData = {}
    if (title) updateData.title = title.trim()
    if (excerpt) updateData.excerpt = excerpt?.trim() || null
    if (category) updateData.category = category?.trim() || null
    if (author) updateData.author = author?.trim() || null
    if (status) updateData.status = status
    if (parsedContent) updateData.content = parsedContent
    if (imageUrl) updateData.image_url = imageUrl

    // ✅ Optional: Update slug if title changes
    if (title) {
      const slug = title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .substring(0, 100)
      updateData.slug = slug
    }

    const { data, error } = await supabaseAdmin
      .from('blogs')
      .update(updateData)
      .eq('id', id)
      .select()

    if (error) throw error

    return Response.json({ message: 'Blog updated successfully', data })
  } catch (err) {
    console.error('Blog update error:', err)
    return Response.json({ error: err.message || 'Internal server error' }, { status: 500 })
  }
}


export async function DELETE(req, { params }) {
  const id = (await params).id
  const { error } = await supabaseAdmin.from('blogs').delete().eq('id', id)
  if (error) return Response.json({ error: error.message }, { status: 500 })
  return Response.json({ message: 'Blog deleted successfully' })
}
