import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

// ✅ POST - Add new subscriber
export async function POST(req) {
  try {
    const { full_name, email, phone } = await req.json();

    if (!email) {
      return NextResponse.json(
        { status: "error", message: "Email is required." },
        { status: 400 }
      );
    }

    // Check if already subscribed
    const { data: existing } = await supabaseAdmin
      .from("news_subscribers")
      .select("id")
      .eq("email", email)
      .single();

    if (existing) {
      return NextResponse.json({
        status: "exists",
        message: "You are already subscribed!",
      });
    }

    // Insert new subscriber
    const { data, error } = await supabaseAdmin
      .from("news_subscribers")
      .insert([{ full_name, email, phone }])
      .select();

    if (error) throw error;

    return NextResponse.json({
      status: "success",
      message: "Subscriber added successfully!",
      data,
    });
  } catch (err) {
    console.error("POST Error:", err);
    return NextResponse.json(
      { status: "error", message: err.message },
      { status: 500 }
    );
  }
}

// ✅ GET - Fetch all subscribers
export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from("news_subscribers")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    return NextResponse.json({
      status: "success",
      count: data.length,
      data,
    });
  } catch (err) {
    console.error("GET Error:", err);
    return NextResponse.json(
      { status: "error", message: err.message },
      { status: 500 }
    );
  }
}

// ✅ PUT - Update subscriber (e.g., change name/phone)
export async function PUT(req) {
  try {
    const { id, full_name, email, phone } = await req.json();

    if (!id) {
      return NextResponse.json(
        { status: "error", message: "Subscriber ID is required." },
        { status: 400 }
      );
    }

    const { data, error } = await supabaseAdmin
      .from("news_subscribers")
      .update({ full_name, email, phone })
      .eq("id", id)
      .select();

    if (error) throw error;

    return NextResponse.json({
      status: "success",
      message: "Subscriber updated successfully.",
      data,
    });
  } catch (err) {
    console.error("PUT Error:", err);
    return NextResponse.json(
      { status: "error", message: err.message },
      { status: 500 }
    );
  }
}

// ✅ DELETE - Remove subscriber(s)
export async function DELETE(req) {
  try {
    const { ids } = await req.json();

    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json(
        { status: "error", message: "Subscriber IDs are required." },
        { status: 400 }
      );
    }

    const { data, error } = await supabaseAdmin
      .from("news_subscribers")
      .delete()
      .in("id", ids);

    if (error) throw error;

    return NextResponse.json({
      status: "success",
      message: "Subscriber(s) deleted successfully.",
      data,
    });
  } catch (err) {
    console.error("DELETE Error:", err);
    return NextResponse.json(
      { status: "error", message: err.message },
      { status: 500 }
    );
  }
}
