import { supabaseAdmin } from '@/lib/supabaseAdmin'

export async function PUT(req, { params }) {
  try {
    const { id } = await params; // Note the await here for Next.js 14+
    
    if (!id) {
      return Response.json(
        { error: 'Job ID is required' },
        { status: 400 }
      );
    }

    const body = await req.json();

    const { data, error } = await supabaseAdmin
      .from('jobs')
      .update({ 
        ...body, 
        updated_at: new Date().toISOString() 
      })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      return Response.json(
        { error: error.message },
        { status: 400 }
      );
    }

    return Response.json({
      success: true,
      data
    });

  } catch (error) {
    console.error('PUT error:', error);
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  const id = params.id
  const { error } = await supabaseAdmin.from('jobs').delete().eq('id', id)
  if (error) return Response.json({ error: error.message }, { status: 400 })
  return Response.json({ message: 'Job deleted successfully' })
}
