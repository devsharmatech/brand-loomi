import { supabase } from "@/lib/supabaseClient";

export async function POST(req) {
  try {
    const formData = await req.formData();
    
    // Extract fields
    const full_name = formData.get("full_name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const subject = formData.get("subject");
    const service = formData.get("service");
    const referral_id = formData.get("referral_id");
    const company_name = formData.get("company_name");
    const message = formData.get("message");
    const source = formData.get("source") || "website";
    const file = formData.get("file");

    // ✅ Validation
    if (!full_name?.trim() || !email?.trim()) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Validation failed",
          message: "Full name and email are required.",
        }),
        { status: 400 }
      );
    }

    let file_url = null;

    // ✅ File upload if exists
    if (file && file.name) {
      try {
        const fileExt = file.name.split(".").pop();
        const safeBaseName = file.name
          .replace(/\.[^/.]+$/, "")
          .replace(/[^a-zA-Z0-9-_]/g, "_");

        const fileName = `${Date.now()}_${safeBaseName}.${fileExt}`;

        const { error: uploadError } = await supabase.storage
          .from("inquiry_uploads")
          .upload(fileName, file, {
            cacheControl: "3600",
            upsert: false,
            contentType: file.type || "application/octet-stream",
          });

        if (uploadError) {
          throw new Error(uploadError.message || "File upload failed.");
        }

        const { data: publicUrlData } = supabase.storage
          .from("inquiry_uploads")
          .getPublicUrl(fileName);

        file_url = publicUrlData?.publicUrl || null;
      } catch (uploadErr) {
        console.error("File Upload Error:", uploadErr);
        return new Response(
          JSON.stringify({
            success: false,
            error: "Upload Error",
            message: "Failed to upload file. Please try again.",
          }),
          { status: 500 }
        );
      }
    }

    // ✅ Insert into DB
    const { error: insertError } = await supabase
      .from("work_inquiries")
      .insert([
        {
          full_name,
          email,
          phone,
          subject,
          service,
          company_name,
          message,
          referral_id,
          source,
          file_url,
        },
      ]);

    if (insertError) {
      console.error("Insert Error:", insertError);
      return new Response(
        JSON.stringify({
          success: false,
          error: "Database Error",
          message: "Could not save inquiry. Please try again later.",
        }),
        { status: 500 }
      );
    }

    // ✅ Success Response
    return new Response(
      JSON.stringify({
        success: true,
        message: "Inquiry submitted successfully!",
      }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Unexpected Server Error:", err);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Server Error",
        message: "An unexpected error occurred. Please try again later.",
      }),
      { status: 500 }
    );
  }
}
