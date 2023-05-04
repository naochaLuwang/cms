import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }
  const body = await request.json();

  const { title, slug, menuId, order, status, content, pageType } = body;

  const newSub = await prisma.submenu.create({
    data: {
      title,
      slug,
      order,
      menuId,
      status,
      content,
      pageType,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(newSub);
}

export async function GET(request: Request) {
  const menus = await prisma.submenu.findMany({
    include: {
      user: true,
      Subsubmenu: true,
      menu: true,
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

  const deleteUser = await prisma.submenu.delete({
    where: {
      id: id,
    },
  });
}
