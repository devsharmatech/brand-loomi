import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;
    const search = searchParams.get("search") || "";
    const status = searchParams.get("status") || "all";
    const sortBy = searchParams.get("sortBy") || "created_at";
    const sortOrder = searchParams.get("sortOrder") || "desc";

    const offset = (page - 1) * limit;

    // Build query with count
    let query = supabaseAdmin
      .from("applications")
      .select("*", { count: "exact" });

    // Apply filters
    if (search) {
      query = query.or(`name.ilike.%${search}%,email.ilike.%${search}%`);
    }

    if (status !== "all") {
      query = query.eq("status", status);
    }

    // Apply sorting
    if (sortBy) {
      query = query.order(sortBy, { ascending: sortOrder === "asc" });
    } else {
      query = query.order("created_at", { ascending: false });
    }

    // Apply pagination
    query = query.range(offset, offset + limit - 1);

    const { data, error, count } = await query;

    if (error) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 400 }
      );
    }

    const totalCount = count || 0;
    const totalPages = Math.ceil(totalCount / limit);

    return NextResponse.json({
      success: true,
      data: data || [],
      pagination: {
        currentPage: page,
        totalPages,
        totalCount,
        hasNext: page < totalPages,
        hasPrev: page > 1,
      },
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}

// export async function POST(req) {
//   try {
//     const form = await req.json();

//     const { data, error } = await supabaseAdmin
//       .from("applications")
//       .insert([{
//         name: form.name,
//         email: form.email,
//         phone: form.phone,
//         linkedin: form.linkedin,
//         resume: form.resume,
//         portfolio: form.portfolio,
//         cover_letter: form.coverLetter,
//         skills: form.skills,
//         referral: form.referral,
//         eligible: form.eligible,
//         consent: form.consent,
//         privacy: form.privacy,
//       }])
//       .select();

//     if (error) {
//       return NextResponse.json(
//         { success: false, message: error.message },
//         { status: 400 }
//       );
//     }

//     const insertedData = data && data.length > 0 ? data[0] : null;

//     return NextResponse.json({
//       success: true,
//       message: "Application submitted successfully!",
//       data: insertedData
//     });

//   } catch (err) {
//     return NextResponse.json(
//       { success: false, message: err.message },
//       { status: 500 }
//     );
//   }
// }

export async function POST(req) {
  try {
    // Create FormData since we're handling file upload
    const formData = await req.formData();

    // Extract all form fields
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const linkedin = formData.get("linkedin");
    const resumeFile = formData.get("resume");
    const portfolio = formData.get("portfolio");
    const coverLetter = formData.get("coverLetter");
    const skills = formData.get("skills");
    const referral = formData.get("referral");
    const eligible = formData.get("eligible");
    const jobPost = formData.get("jobPost");
    const consent = formData.get("consent") === "true";
    const privacy = formData.get("privacy") === "true";

    let jobPostName = "Not Specified";
    if (jobPost) {
      try {
        const { data: jobData, error: jobError } = await supabaseAdmin
          .from("jobs")
          .select("title")
          .eq("id", jobPost)
          .single();

        if (!jobError && jobData) {
          jobPostName = jobData.title;
        }
      } catch (jobErr) {
        console.error("Error fetching job title:", jobErr);
      }
    }

    let resumeUrl = null;
    if (resumeFile && resumeFile instanceof File) {
      const fileExt = resumeFile.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random()
        .toString(36)
        .substring(2)}.${fileExt}`;
      const filePath = `resumes/${fileName}`;
      const { data: uploadData, error: uploadError } =
        await supabaseAdmin.storage.from("resume").upload(filePath, resumeFile);

      if (uploadError) {
        console.error("File upload error:", uploadError);
        return NextResponse.json(
          { success: false, message: "Failed to upload resume file" },
          { status: 400 }
        );
      }

      const { data: urlData } = supabaseAdmin.storage
        .from("resume")
        .getPublicUrl(filePath);

      resumeUrl = urlData.publicUrl;
    }
    const { data, error } = await supabaseAdmin
      .from("applications")
      .insert([
        {
          name: name,
          email: email,
          phone: phone,
          linkedin: linkedin,
          resume: resumeUrl,
          portfolio: portfolio,
          cover_letter: coverLetter,
          skills: skills,
          referral: referral,
          eligible: eligible,
          job_post_id: jobPost,
          job_post_name: jobPostName,
          consent: consent,
          privacy: privacy,
        },
      ])
      .select();

    if (error) {
      if (resumeUrl) {
        const filePath = resumeUrl.split("/").pop();
        await supabaseAdmin.storage
          .from("resume")
          .remove([`resumes/${filePath}`]);
      }

      return NextResponse.json(
        { success: false, message: error.message },
        { status: 400 }
      );
    }

    const insertedData = data && data.length > 0 ? data[0] : null;

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully!",
      data: insertedData,
    });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

// Use PUT instead of PATCH to match your frontend
export async function PUT(req) {
  try {
    const { id, status } = await req.json();

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Application ID is required" },
        { status: 400 }
      );
    }

    const { data, error } = await supabaseAdmin
      .from("applications")
      .update({ status })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Status updated successfully",
      data,
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    const { ids } = await req.json();

    if (!ids || !Array.isArray(ids)) {
      return NextResponse.json(
        { success: false, message: "IDs must be an array" },
        { status: 400 }
      );
    }

    const { data, error } = await supabaseAdmin
      .from("applications")
      .delete()
      .in("id", ids)
      .select();

    if (error) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `${ids.length} application(s) deleted successfully`,
      data,
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}
