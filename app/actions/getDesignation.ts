export async function getDesignation(id: string) {
  const response = await fetch(`${process.env.API_URL}/api/designation/${id}`, {
    cache: "no-store",
  });
  return response.json();
}
