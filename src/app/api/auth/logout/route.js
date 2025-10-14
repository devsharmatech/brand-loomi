import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // Create response
    const response = NextResponse.json({
      success: true,
      message: "Logged out successfully"
    });

    // Clear the admin_token cookie
    response.cookies.set("admin_token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 0, // Expire immediately
      path: "/",
    });

    // Also clear any client-side tokens if they exist
    response.cookies.set("token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 0,
      path: "/",
    });

    return response;

  } catch (err) {
    console.error("Logout error:", err);
    return NextResponse.json(
      { error: "Logout failed" }, 
      { status: 500 }
    );
  }
}

// Optional: GET method for direct browser access
export async function GET(req) {
  try {
    const response = NextResponse.redirect(new URL('/login', req.url));
    
    // Clear cookies
    response.cookies.set("admin_token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 0,
      path: "/",
    });

    return response;

  } catch (err) {
    console.error("Logout error:", err);
    return NextResponse.redirect(new URL('/login', req.url));
  }
}