import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const { title, slug, order, status } = body;

  const menu = await prisma.menu.create({
    data: {
      title,
      slug,
      order,
      status,
    },
  });

  return NextResponse.json(menu);
}

export async function GET(request: Request) {
  const menus = await prisma.menu.findMany({
    include: {
      submenus: true,
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

  const deleteUser = await prisma.menu.delete({
    where: {
      id: id,
    },
  });
}
