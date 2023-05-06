export async function getSubLink(id: string) {
  const response = await fetch(`${process.env.API_URL}/api/sublinks/${id}`, {
    cache: "no-store",
  });
  return response.json();
}
