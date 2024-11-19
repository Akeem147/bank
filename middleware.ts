import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // Check for the "userLoggedIn" cookie
  const isLoggedIn = req.cookies.get("userLoggedIn")?.value;

  if (!isLoggedIn && req.nextUrl.pathname !== "/sign-in") {
    // Redirect to the login page if not logged in
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  // Proceed to the requested page if logged in
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/my-banks", "/pay-bill", "/payment-transfer", "/transaction-history"],
};
