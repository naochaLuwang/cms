import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";

export async function getAllLinks(): Promise<LinkProps[]> {
  const session = await getServerSession(authOptions);

  const response: Response = await fetch(`${process.env.API_URL}/api/links`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Authorization: session?.user?.accessToken,
    },
  });
  return response.json();
}
