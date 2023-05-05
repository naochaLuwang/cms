import { withAuth } from "next-auth/middleware";
export default withAuth({
  secret: process.env.NEXT_AUTH_SECRET,
});
export const config = {
  matcher: [
    "/",
    "/dashboard",
    "/menu/:path*",
    "/submenu/:path*",
    "/orgsetting",
    "/people/:path*",
    "/department/:path*",
    "/designation/:path*",
    "/albulm/:path*",
    "/carousalimage/:path*",
  ],
};
