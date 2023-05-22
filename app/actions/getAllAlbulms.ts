import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";

export async function getAllAlbulms(): Promise<AlbumProps[]> {
  const session = await getServerSession(authOptions);

  const response: Response = await fetch(`${process.env.API_URL}/api/albulm`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Authorization: session?.user?.accessToken,
    },
  });
  return response.json();
}
