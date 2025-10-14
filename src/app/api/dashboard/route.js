import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function GET() {
  try {
    // Fetch totals in parallel for performance
    const [
      payWhatYouCan,
      jobs,
      inquiries,
      blogs,
      applications,
    ] = await Promise.all([
      supabaseAdmin
        .from("pay_what_you_can_applications")
        .select("id, business_name, submitted_at"),
      supabaseAdmin.from("jobs").select("id, status, posted_at"),
      supabaseAdmin.from("work_inquiries").select("id, full_name, created_at"),
      supabaseAdmin
        .from("blogs")
        .select("id, title, status, created_at"),
      supabaseAdmin.from("applications").select("id, name, created_at"),
    ]);

    const error =
      payWhatYouCan.error ||
      jobs.error ||
      inquiries.error ||
      blogs.error ||
      applications.error;

    if (error) throw error;

    // Build summary data
    const dashboard = {
      stats: {
        total_pay_what_you_can: payWhatYouCan.data.length,
        total_jobs: jobs.data.length,
        total_inquiries: inquiries.data.length,
        total_blogs: blogs.data.length,
        total_applications: applications.data.length,
      },
      recent: {
        latest_pay_what_you_can: payWhatYouCan.data
          .sort((a, b) => new Date(b.submitted_at) - new Date(a.submitted_at))
          .slice(0, 5),
        latest_jobs: jobs.data
          .sort((a, b) => new Date(b.posted_at) - new Date(a.posted_at))
          .slice(0, 5),
        latest_inquiries: inquiries.data
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .slice(0, 5),
        latest_blogs: blogs.data
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .slice(0, 5),
        latest_applications: applications.data
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .slice(0, 5),
      },
    };

    return NextResponse.json({
      success: true,
      message: "Dashboard data fetched successfully",
      data: dashboard,
    });
  } catch (err) {
    console.error("Dashboard API Error:", err.message);
    return NextResponse.json(
      { success: false, message: err.message || "Failed to load dashboard" },
      { status: 500 }
    );
  }
}
