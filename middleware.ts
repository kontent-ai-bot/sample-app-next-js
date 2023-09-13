import { NextRequest, NextResponse } from 'next/server'

export const middleware = (request: NextRequest) => {

  const currentEnvId = process.env.NEXT_PUBLIC_KONTENT_ENVIRONMENT_ID;
  if (!currentEnvId) {
    throw new Error("Missing 'NEXT_PUBLIC_KONTENT_ENVIRONMENT_ID' environment variable.");
  }

  if(request.nextUrl.pathname === '/envid' ||  request.nextUrl.pathname === '/callback'){
    return NextResponse.next();
  }

  if(request.nextUrl.pathname.startsWith('/_next/static')){
    return NextResponse.next();
  }

  if(request.nextUrl.pathname === '/articles'){
    return NextResponse.rewrite(new URL(`/${currentEnvId}/articles/category/all`, request.url));
  }

  // Redirect to the /articles when manually type the /articles/category/all URL
  if(request.nextUrl.pathname === '/articles/category/all'){
    return NextResponse.redirect(new URL('/articles', request.url));
  }

  // /articles will be shown in as URL but request will be against fully defined URL path
  if (request.nextUrl.pathname === '/articles') {
    return NextResponse.rewrite(new URL('/articles/category/all/page/1', request.url));
  }

  // If there is no pagination, but category provided - add the first page ti URL path
  if (/^\/articles\/category\/[^/]+$/.test(request.nextUrl.pathname)) {
    return NextResponse.rewrite(new URL(request.url + "/page/1", request.url));
  }

  return NextResponse.rewrite(new URL(`/${currentEnvId}${request.nextUrl.pathname ? `${request.nextUrl.pathname}` : ''}`, request.url))
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    '/'
  ],
}
