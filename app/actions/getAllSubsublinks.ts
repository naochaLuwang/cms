export async function getAllSubsublinks(): Promise<SubsubLinkProps[]> {
  const response: Response = await fetch(
    `${process.env.API_URL}/api/subsublinks`,
    {
      cache: "no-store",
    }
  );
  return response.json();
}
