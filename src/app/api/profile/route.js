import { supabaseAdmin } from "@/lib/supabaseAdmin"; 
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

// ========================
// GET - Get admin profile
// ========================
export async function GET(req) {
  try {
    const token = req.cookies.get("admin_token")?.value;

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Fetch admin data
    const { data: admin, error } = await supabaseAdmin
      .from("admins")
      .select("id, email, full_name, role, created_at")
      .eq("id", decoded.id)
      .single();

    if (error || !admin) {
      return NextResponse.json({ error: "Admin not found" }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      user: admin,
    });
  } catch (err) {
    console.error("Profile fetch error:", err);
    return NextResponse.json(
      { error: "Failed to fetch profile" },
      { status: 500 }
    );
  }
}

// ========================
// PUT - Update admin profile
// ========================
export async function PUT(req) {
  try {
    const token = req.cookies.get("admin_token")?.value;

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { name, email } = await req.json();

    // Validate input
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Check if email already exists (excluding current admin)
    const { data: existingAdmin, error: checkError } = await supabaseAdmin
      .from("admins")
      .select("id")
      .eq("email", email.toLowerCase().trim())
      .neq("id", decoded.id)
      .maybeSingle();

    if (checkError) {
      console.error("Email check error:", checkError);
      return NextResponse.json(
        { error: "Server error checking email" },
        { status: 500 }
      );
    }

    if (existingAdmin) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 409 }
      );
    }

    // Update admin profile
    const { data, error } = await supabaseAdmin
      .from("admins")
      .update({
        full_name: name.trim(),
        email: email.toLowerCase().trim(),
        updated_at: new Date().toISOString(),
      })
      .eq("id", decoded.id)
      .select("id, email, full_name, role, created_at")
      .maybeSingle();

    if (error) {
      console.error("Update error:", error);
      return NextResponse.json(
        { error: "Failed to update profile" },
        { status: 500 }
      );
    }

    if (!data) {
      console.warn("No admin found for update id:", decoded.id);
      return NextResponse.json(
        { error: "Admin not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
  success: true,
  message: "Profile updated successfully",
  user: data[0],
});
  } catch (err) {
    console.error("Profile update error:", err);
    return NextResponse.json(
      { error: "Failed to update profile" },
      { status: 500 }
    );
  }
}
