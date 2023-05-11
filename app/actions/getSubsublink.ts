export async function getSubsubLink(id: string): Promise<SubsubLinkProps> {
  const response = await fetch(`${process.env.API_URL}/api/subsublinks/${id}`, {
    cache: "no-store",
  });
  return response.json();
}
