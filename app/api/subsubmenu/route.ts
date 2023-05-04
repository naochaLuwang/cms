import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }
  const body = await request.json();

  const { title, slug, submenuId, order, status, content, pageType } = body;

  const newSubsub = await prisma.subsubmenu.create({
    data: {
      title,
      slug,
      order,
      submenuId,
      status,
      content,
      pageType,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(newSubsub);
}

export async function GET(request: Request) {
  const menus = await prisma.subsubmenu.findMany({
    include: {
      user: true,
      subMenu: true,
    },
  });

  return NextResponse.json(menus);
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ message: "ID cannot be empty" });
  }

  const deleteSubsubmenu = await prisma.subsubmenu.delete({
    where: {
      id: id,
    },
  });
}
