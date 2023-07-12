import prisma from "@/app/libs/prismadb";

import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const body = await request.json();

  const { title, order, thumbnailImage, status } = body;

  const orgsetting = await prisma.albulm.create({
    data: {
      title,
      order,
      thumbnailImage,
      status,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(orgsetting);
}
