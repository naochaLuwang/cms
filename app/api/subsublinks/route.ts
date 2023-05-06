import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }
  const body = await request.json();

  const { title, slug, sublinkId, order, status, content, pageType } = body;

  const newSubsub = await prisma.subsublinks.create({
    data: {
      title,
      slug,
      order,
      sublinkId,
      status,
      content,
      pageType,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(newSubsub);
}

export async function GET(request: Request) {
  const sublinks = await prisma.subsublinks.findMany({
    include: {
      user: true,
      subLinks: true,
    },
  });

  return NextResponse.json(sublinks);
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ message: "ID cannot be empty" });
  }

  const deleteSubsublink = await prisma.subsublinks.delete({
    where: {
      id: id,
    },
  });
}
