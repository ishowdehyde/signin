import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// this function can be mark async if using await inside

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === "/login" || "/signup";

  const token = request.cookies.get("token")?.value || "";

  if (!isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  //   if (request.nextUrl.pathname === "/profile") {
  //     return NextResponse.redirect("/Login");
  //   }
}

// see Matching paths below to learn

export const config = {
  matcher: ["/", "/profile", "/Login", "/signup"],
};
