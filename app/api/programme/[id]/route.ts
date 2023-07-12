import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

interface IParams {
  id?: string;
}

export async function PUT(request: Request, { params }: { params: IParams }) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }
  const { id } = params;

  const body = await request.json();

  const {
    slug,
    programmeName,
    programmeCode,
    programmeType,
    programmeDuration,
    minQualification,
    order,
    status,
  } = body;

  if (!id || typeof id !== "string") {
    throw new Error("Invalid ID");
  }

  const editprogramme = await prisma.programme.update({
    where: {
      id: id,
    },
    data: {
      slug,
      programmeName,
      programmeCode,
      programmeType,
      programmeDuration,
      minQualification,
      order,
      status,
    },
  });

  return NextResponse.json(editprogramme);
}
