// app/api/sign-out/route.ts

import { NextResponse } from 'next/server';

export async function POST() {
  // Clear cookies or any session-based data on the server side.
  // For example, you can clear cookies like this:

  const headers = new Headers();
  headers.append('Set-Cookie', 'userLoggedIn=; Max-Age=0; Path=/; HttpOnly; Secure; SameSite=Strict');

  // Optionally, you can also clear any session data or authentication tokens here.

  return NextResponse.json({ message: 'Logged out successfully' }, { headers });
}
