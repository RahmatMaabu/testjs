import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function middleware(req = NextRequest) {
  const { NEXT_PUBLIC_ENDPOINT } = process.env;

  try {
    // Fetch user data from API
    const response = await axios.get(`${NEXT_PUBLIC_ENDPOINT}/me`, {
      withCredentials: true,
      headers: {
        Cookie: req.headers.get('cookie') || '',
      },
    });

    // If the user is authenticated, allow the request to continue
    if (response.status === 200) {
      return NextResponse.next();
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    // If there's an error (e.g. user not authenticated), redirect to the login page
    return NextResponse.redirect(new URL('/', req.url));
  }
}

export const config = {
    matcher: ['/admin/:path*'],
  }