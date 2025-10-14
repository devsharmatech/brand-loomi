import { supabase } from '@/lib/supabaseClient'

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get("page")) || 1;
    const perPage = parseInt(url.searchParams.get("perPage")) || 5;
    const offset = (page - 1) * perPage;

    const { data, error, count } = await supabase
      .from("blogs")
      .select("*", { count: "exact" })
      .order("created_at", { ascending: false })
      .range(offset, offset + perPage - 1);

    if (error) throw error;

    return new Response(
      JSON.stringify({
        data,
        page,
        perPage,
        total: count,
        totalPages: Math.ceil(count / perPage),
      }),
      { status: 200 }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
