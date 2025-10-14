import { supabase } from '@/lib/supabaseClient'

export async function GET(req, { params }) {
  try {
    const { slug } = params;

    // Fetch the main blog
    const { data: blog, error: blogError } = await supabase
      .from('blogs')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .single();

    if (blogError) {
      return new Response(JSON.stringify({ success: false, error: 'Blog not found' }), { status: 404 });
    }

    // Fetch related posts (same category, excluding current)
    const { data: related, error: relatedError } = await supabase
      .from('blogs')
      .select('*')
      .eq('status', 'published')
      .eq('category', blog.category)
      .neq('slug', slug)
      .limit(3);

    if (relatedError) {
      console.error('Related posts error:', relatedError);
    }

    return new Response(JSON.stringify({ success: true, blog, related }), { status: 200 });
  } catch (err) {
    console.error('Supabase GET blog error:', err);
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
}
