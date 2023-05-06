import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }
  const body = await request.json();

  const { designationName, status, designationCode } = body;

  const department = await prisma.designation.create({
    data: {
      designationName,
      designationCode,

      status,
      createdBy: currentUser.name || "",
      updatedBy: currentUser.name || "",
    },
  });

  return NextResponse.json(department);
}

export async function GET(request: Request) {
  const designations = await prisma.designation.findMany();

  return NextResponse.json(designations);
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ message: "ID cannot be empty" });
  }

  const deleteUser = await prisma.department.delete({
    where: {
      id: id,
    },
  });
}
