import prisma from "@/app/libs/prismadb";

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const {
    name,
    phone,
    email,
    add1,
    add2,
    mtitle,
    description,
    facebook,
    linkedin,
    instagram,
  } = body;

  const orgsetting = await prisma.orgsetting.create({
    data: {
      name,
      phone,
      email,
      add1,
      add2,
      mtitle,
      description,
      facebook,
      linkedin,
      instagram,
    },
  });

  return NextResponse.json(orgsetting);
}

export async function GET(request: Request) {
  const orgsetting = await prisma.orgsetting.findMany();

  return NextResponse.json(orgsetting);
}
