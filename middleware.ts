import { NextResponse, type NextRequest } from 'next/server'

const disabledRouteMatcher = /^\/(admin|portal|products|membership)(?:\/|$)/

export function middleware(request: NextRequest) {
  if (!disabledRouteMatcher.test(request.nextUrl.pathname)) return NextResponse.next()

  return new NextResponse(null, {
    status: 404,
    headers: { 'X-Robots-Tag': 'noindex, nofollow' },
  })
}

export const config = {
  matcher: ['/admin/:path*', '/portal/:path*', '/products/:path*', '/membership/:path*'],
}
