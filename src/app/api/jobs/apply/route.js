import { supabase } from '@/lib/supabaseClient'

export async function POST(request) {
  const body = await request.json()
  const { job_id, name, email, message, resume_url } = body

  const { data, error } = await supabase
    .from('job_applications')
    .insert([{ job_id, name, email, message, resume_url }])

  if (error) return Response.json({ error: error.message }, { status: 400 })
  return Response.json({ message: 'Application submitted successfully', data })
}
