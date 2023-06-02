import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }
  const body = await request.json();

  const {
    programmeName,
    programmeCode,
    programmeType,
    slug,
    programmeDuration,
    minQualification,
    order,
    status,
  } = body;

  const menu = await prisma.programme.create({
    data: {
      programmeName,
      programmeCode,
      programmeType,
      slug,
      programmeDuration,
      minQualification,
      order,
      status,

      createdBy: currentUser.id,
      updatedBy: currentUser.id,
    },
  });

  return NextResponse.json(menu);
}

export async function GET(request: Request) {
  const programme = await prisma.programme.findMany();

  return NextResponse.json(programme);
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ message: "ID cannot be empty" });
  }

  try {
    await prisma.programme.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json({ message: "Programme deleted successfully" });
  } catch (error) {
    console.error("Error deleting program:", error);
    return NextResponse.json(
      { message: "Failed to delete programme" },
      { status: 500 }
    );
  }
}
