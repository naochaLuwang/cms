import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }
  const body = await request.json();

  const { title, slug, subtitle, description, status, order, thumbnail } = body;

  const newNews = await prisma.news.create({
    data: {
      title: title,
      thumbnail: thumbnail,
      slug: slug,
      subtitle: subtitle,
      description: description,
      status: status,
      order: order,
      createdBy: currentUser.id,
      updatedBy: currentUser.id,
    },
  });

  return NextResponse.json(newNews);
}

export async function GET(request: Request) {
  const news = await prisma.news.findMany({});

  return NextResponse.json(news);
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ message: "ID cannot be empty" });
  }

  const deleteUser = await prisma.news.delete({
    where: {
      id: id,
    },
  });
}
