import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

interface IParams {
  id?: string;
}

export async function PUT(request: Request, { params }: { params: IParams }) {
  const { id } = params;

  const body = await request.json();

  const {
    firstName,
    lastName,
    slug,
    email,
    phone,
    showEmail,
    showPhone,
    departmentId,
    designationId,

    order,
    profileUrl,
    status,
  } = body;

  if (!id || typeof id !== "string") {
    throw new Error("Invalid ID");
  }

  const editpeople = await prisma.people.update({
    where: {
      id: id,
    },
    data: {
      firstName,
      lastName,
      slug,
      email,
      phone,
      showEmail,
      showPhone,
      departmentId,
      designationId,

      order,
      profileUrl,
      status,
    },
  });

  return NextResponse.json(editpeople);
}
