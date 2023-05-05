import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

interface IParams {
  id?: string;
}

export async function GET(request: Request, { params }: { params: IParams }) {
  const { id } = params;

  const designation = await prisma.designation.findUnique({
    where: {
      id: id,
    },
  });

  return NextResponse.json(designation);
}

export async function PUT(request: Request, { params }: { params: IParams }) {
  const { id } = params;
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();

  const { designationName, status, designationCode } = body;

  if (!id || typeof id !== "string") {
    throw new Error("Invalid ID");
  }

  const editDesignation = await prisma.designation.update({
    where: {
      id: id,
    },
    data: {
      designationName,
      designationCode,

      status,
      createdBy: currentUser.name || "",
      updatedBy: currentUser.name || "",
    },
  });

  return NextResponse.json(editDesignation);
}
