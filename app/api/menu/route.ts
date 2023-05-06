import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";

import { verifyJwt } from "@/app/libs/jwt";

export async function POST(request: Request) {
  const accessToken = request.headers.get("authorization");

  if (!accessToken || !verifyJwt(accessToken)) {
    return new Response(
      JSON.stringify({
        error: "unauthorized",
      }),
      {
        status: 401,
      }
    );
  }

  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }
  const body = await request.json();

  const { title, slug, order, status, pageType, content } = body;

  const menu = await prisma.menu.create({
    data: {
      title,
      slug,
      order,
      status,
      pageType,
      userId: currentUser.id,
      content,
    },
  });

  return NextResponse.json(menu);
}

export async function GET(request: Request) {
  // const accessToken = request.headers.get("authorization");
  //
  // if (!accessToken || !verifyJwt(accessToken)) {
  //   return new Response(
  //     JSON.stringify({
  //       error: "unauthorized",
  //     }),
  //     {
  //       status: 401,
  //     }
  //   );
  // }

  const menus = await prisma.menu.findMany({
    where: {
      status: "ACTIVE",
    },
    include: {
      submenus: {
        include: {
          Subsubmenu: true,
        },
      },

      user: true,
    },
  });

  return NextResponse.json(menus);
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ message: "ID cannot be empty" });
  }

  const deleteUser = await prisma.menu.delete({
    where: {
      id: id,
    },
  });
}
