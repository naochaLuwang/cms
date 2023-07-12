import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }
  const body = await request.json();

  const { title, slug, linkId, order, status, content, pageType, subtitle } =
    body;

  const newSublink = await prisma.sublinks.create({
    data: {
      title,
      subtitle,
      slug,
      order,
      linkId,
      status,
      content,
      pageType,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(newSublink);
}
