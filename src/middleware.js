// pages/_middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
  const url = req.nextUrl.clone();

  // Check if the request is for the root path
  if (url.pathname === '/') {
    // Redirect to the /home route
    url.pathname = '/home';
    return NextResponse.redirect(url);
  }

  // Pass the request through to the next middleware or route handler
  return NextResponse.next();
}

export const config = {
  matcher: ['/'], // Protect the home page
};
