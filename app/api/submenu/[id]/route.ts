import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

interface IParams {
  id?: string;
}

export async function GET(request: Request, { params }: { params: IParams }) {
  const { id } = params;
  const menu = await prisma.submenu.findUnique({
    where: {
      id: id,
    },
  });

  return NextResponse.json(menu);
}

export async function PUT(request: Request, { params }: { params: IParams }) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }
  const { id } = params;

  const body = await request.json();

  const { title, slug, order, status, content, pageType, menuId } = body;

  if (!id || typeof id !== "string") {
    throw new Error("Invalid ID");
  }

  const editsubmenu = await prisma.submenu.update({
    where: {
      id: id,
    },
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

  return NextResponse.json(editsubmenu);
}
