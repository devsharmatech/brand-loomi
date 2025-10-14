import { supabaseAdmin } from '@/lib/supabaseAdmin'

// ✅ Get all jobs
export async function GET() {
  const { data, error } = await supabaseAdmin
    .from('jobs')
    .select('*')
    .order('posted_at', { ascending: false })

  if (error) return Response.json({ error: error.message }, { status: 500 })
  return Response.json(data)
}

// ✅ Create job
export async function POST(req) {
  const body = await req.json()
  const { data, error } = await supabaseAdmin
    .from('jobs')
    .insert([body])
    .select()

  if (error) return Response.json({ error: error.message }, { status: 400 })
  return Response.json(data[0])
}
