import { supabaseAdmin } from '@/lib/supabaseAdmin'

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from("work_inquiries")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) throw error

    return new Response(
      JSON.stringify({ success: true, data }),
      { status: 200 }
    )
  } catch (err) {
    console.error("Fetch contact messages error:", err)
    return new Response(
      JSON.stringify({
        success: false,
        error: "Failed to fetch messages",
      }),
      { status: 500 }
    )
  }
}
