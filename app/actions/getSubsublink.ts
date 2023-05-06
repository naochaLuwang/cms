export async function getSubsubLink(id: string) {
  const response = await fetch(`${process.env.API_URL}/api/subsublinks/${id}`, {
    cache: "no-store",
  });
  return response.json();
}
