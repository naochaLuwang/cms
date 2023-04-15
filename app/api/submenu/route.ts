import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const { title, slug, menuId, order, status } = body;

  const newSub = await prisma.submenu.create({
    data: {
      title,
      slug,
      order,
      menuId,
      status,
    },
  });

  console.log(newSub);

  return NextResponse.json(newSub);
}

// export async function GET(request: Request) {
//   const menus = await prisma.menu.findMany();

//   return NextResponse.json(menus);
// }
