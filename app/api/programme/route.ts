import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }
  const body = await request.json();

  const {
    programmeName,
    programmeCode,
    programmeType,
    slug,
    image,
    order,
    status,
  } = body;

  const menu = await prisma.programme.create({
    data: {
      programmeName,
      programmeCode,
      programmeType,
      slug,
      image,
      order,
      status,

      createdBy: currentUser.id,
      updatedBy: currentUser.id,
    },
  });

  return NextResponse.json(menu);
}
