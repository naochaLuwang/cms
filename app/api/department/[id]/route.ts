import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

interface IParams {
  id?: string;
}

export async function GET(request: Request, { params }: { params: IParams }) {
  const { id } = params;
  const menu = await prisma.department.findUnique({
    where: {
      id: id,
    },
  });

  return NextResponse.json(menu);
}
