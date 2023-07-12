import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

interface IParams {
  id?: string;
}

export async function PUT(request: Request, { params }: { params: IParams }) {
  const { id } = params;

  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
  const body = await request.json();

  const { title, order, imgUrl, status } = body;

  if (!id || typeof id !== "string") {
    throw new Error("Invalid ID");
  }

  const editcarousal = await prisma.carousalimage.update({
    where: {
      id: id,
    },
    data: {
      title,
      order,
      imgUrl,
      status,
      userId: currentUser.id || "",
    },
  });

  return NextResponse.json(editcarousal);
}
