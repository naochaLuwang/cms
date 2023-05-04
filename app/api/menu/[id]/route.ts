import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

interface IParams {
  id?: string;
}

export async function GET(request: Request, { params }: { params: IParams }) {
  const { id } = params;
  const menu = await prisma.menu.findUnique({
    where: {
      id: id,
    },
  });

  return NextResponse.json(menu);
}

export async function PUT(request: Request, { params }: { params: IParams }) {
  const { id } = params;

  const body = await request.json();

  const { title, slug, order, status, content, pageType } = body;

  if (!id || typeof id !== "string") {
    throw new Error("Invalid ID");
  }

  // const setting = await prisma.orgsetting.findUnique({
  //   where: {
  //     id: id,
  //   },
  // });

  const editmenu = await prisma.menu.update({
    where: {
      id: id,
    },
    data: {
      title,
      slug,
      order,
      status,
      pageType,
      content,
    },
  });

  return NextResponse.json(editmenu);
}
