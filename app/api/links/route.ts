import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";

import { verifyJwt } from "@/app/libs/jwt";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }
  const body = await request.json();

  const { title, slug, order, status, pageType, content, isMulti } = body;

  const menu = await prisma.links.create({
    data: {
      title,
      slug,
      order,
      status,
      pageType,
      isMulti,
      userId: currentUser.id,
      content,
    },
  });

  return NextResponse.json(menu);
}

export async function GET(request: Request) {
  const menus = await prisma.links.findMany({
    where: {
      status: "ACTIVE",
    },
    include: {
      sublinks: {
        include: {
          Subsublinks: true,
        },
      },

      user: true,
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

  const deleteUser = await prisma.links.delete({
    where: {
      id: id,
    },
  });
}
