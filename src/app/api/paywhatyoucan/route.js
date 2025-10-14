import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

// ✅ POST - Create new submission
export async function POST(req) {
  try {
    const formData = await req.formData();

    let video_url = null;
    const video = formData.get("video");
    if (video && video.name) {
      const { data: uploadData, error: uploadError } = await supabaseAdmin.storage
        .from("videos")
        .upload(`applications/${Date.now()}-${video.name}`, video, {
          cacheControl: "3600",
          upsert: false,
        });
      if (uploadError) throw uploadError;

      const { data: publicUrl } = supabaseAdmin.storage
        .from("videos")
        .getPublicUrl(uploadData.path);
      video_url = publicUrl.publicUrl;
    }

    const payload = {
      business_name: formData.get("businessName"),
      business_location: formData.get("businessLocation"),
      contact_name: formData.get("contactName"),
      website_url: formData.get("websiteURL"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      industry: formData.get("industry"),
      business_type: formData.get("businessType"),
      business_description: formData.get("businessDescription"),
      marketing_challenges: formData.get("marketingChallenges"),
      unique_selling: formData.get("uniqueSelling"),
      target_audience: formData.get("targetAudience"),
      founded_date: formData.get("foundedDate"),
      employee_count: formData.get("employeeCount"),
      website_goal: formData.get("websiteGoal"),
      admired_websites: formData.get("admiredWebsites"),
      branding_assets: formData.get("brandingAssets"),
      additional_features: formData.get("additionalFeatures"),
      ecommerce: formData.get("ecommerce"),
      pages_needed: formData.get("pagesNeeded"),
      preferred_cms: formData.get("preferredCMS"),
      hear_about: formData.get("hearAbout"),
      hear_other: formData.get("hearOther"),
      years_in_business: formData.get("yearsInBusiness"),
      annual_revenue: formData.get("annualRevenue"),
      pay_amount: formData.get("payAmount"),
      agree_pay_model: formData.get("agreePayModel") === "true",
      agree_privacy: formData.get("agreePrivacy") === "true",
      subscribe: formData.get("subscribe") === "true",
      video_url,
    };

    const { data, error } = await supabaseAdmin
      .from("pay_what_you_can_applications")
      .insert([payload])
      .select();

    if (error) throw error;

    return NextResponse.json({ status: "success", data });
  } catch (err) {
    console.error("Error saving form:", err.message);
    return NextResponse.json(
      { status: "error", message: err.message },
      { status: 500 }
    );
  }
}

// ✅ GET - Fetch all submissions
export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from("pay_what_you_can_applications")
      .select("*")
      .order("submitted_at", { ascending: false });
    if (error) throw error;

    return NextResponse.json({ status: "success", data });
  } catch (err) {
    return NextResponse.json(
      { status: "error", message: err.message },
      { status: 500 } 
    );
  }
}

// ✅ PUT - Update status (approve/reject)
export async function PUT(req) {
  try {
    const { ids, status } = await req.json();
    const { data, error } = await supabaseAdmin
      .from("pay_what_you_can_applications")
      .update({ status })
      .in("id", ids);
    if (error) throw error;

    return NextResponse.json({ status: "success", data });
  } catch (err) {
    return NextResponse.json(
      { status: "error", message: err.message },
      { status: 500 }
    );
  }
}

// ✅ DELETE - Delete selected submissions
export async function DELETE(req) {
  try {
    const { ids } = await req.json();
    const { data, error } = await supabaseAdmin
      .from("pay_what_you_can_applications")
      .delete()
      .in("id", ids);
    if (error) throw error;

    return NextResponse.json({ status: "success", data });
  } catch (err) {
    return NextResponse.json(
      { status: "error", message: err.message },
      { status: 500 }
    );
  }
}
