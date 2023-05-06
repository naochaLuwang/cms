import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

interface IParams {
  id?: string;
}

export async function GET(request: Request, { params }: { params: IParams }) {
  const { id } = params;
  const subsublinks = await prisma.subsublinks.findUnique({
    where: {
      id: id,
    },
  });

  return NextResponse.json(subsublinks);
}

export async function PUT(request: Request, { params }: { params: IParams }) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }
  const { id } = params;

  const body = await request.json();

  const { title, slug, order, status, content, pageType, sublinkId } = body;

  if (!id || typeof id !== "string") {
    throw new Error("Invalid ID");
  }

  const editsubsublink = await prisma.subsublinks.update({
    where: {
      id: id,
    },
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

  return NextResponse.json(editsubsublink);
}
