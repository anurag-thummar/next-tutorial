// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   //   if (request.nextUrl.pathname != "/login") {
//   return NextResponse.redirect(new URL("/login", request.url));
//   //   }

//   // all route redirection to login if uwser not logged in
//   //   if (request.nextUrl.pathname != "/login") {
//   // return NextResponse.redirect(new URL("/login", request.url));
//   //   }
// }

// // page specific redirection
// export const config = {
//   matcher: ["/about/:path*", "/studentlist/:path*"],
// };



import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;

  // Allow only /about/aboutcollege (and nothing deeper)
  if (url.pathname === "/about/aboutcollege") {
    return NextResponse.next(); // allow
  }

  // Redirect all other /about/* paths
  if (url.pathname.startsWith("/about")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next(); // allow all other routes
}

