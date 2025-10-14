import { supabaseAdmin } from '@/lib/supabaseAdmin'

export async function DELETE(request, { params }) {
  try {
    // Await params first
    const { id } = await params;

    if (!id) {
      return new Response(
        JSON.stringify({ success: false, error: 'Message ID is required' }),
        { status: 400 }
      );
    }

    // Check if message exists
    const { data: existingMessage, error: checkError } = await supabaseAdmin
      .from('work_inquiries')
      .select('id')
      .eq('id', id)
      .single();

    if (checkError) {
      if (checkError.code === 'PGRST116') {
        return new Response(
          JSON.stringify({ success: false, error: 'Message not found' }),
          { status: 404 }
        );
      }
      throw checkError;
    }

    // Delete the message
    const { error: deleteError } = await supabaseAdmin
      .from('work_inquiries')
      .delete()
      .eq('id', id);

    if (deleteError) throw deleteError;

    return new Response(
      JSON.stringify({ success: true, message: 'Message deleted', deletedId: id }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Delete message error:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Failed to delete message', details: error.message }),
      { status: 500 }
    );
  }
}
