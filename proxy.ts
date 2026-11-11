import { NextResponse, type NextRequest } from "next/server";

// /listing/<id> for a removed listing: show the /gone page at the same URL with a 410.
export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/listing/")) {
    return NextResponse.rewrite(new URL("/gone", request.url), { status: 410 });
  }
  if (request.nextUrl.pathname === "/maintenance") {
    return NextResponse.rewrite(new URL("/gone", request.url), {
      status: 503,
      headers: { "retry-after": "60" },
    });
  }
  return NextResponse.next();
}

export const config = { matcher: ["/listing/:path*", "/maintenance"] };
