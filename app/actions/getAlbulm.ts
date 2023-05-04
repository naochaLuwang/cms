export async function getAlbulm(id: any) {
  const response = await fetch(`${process.env.API_URL}/api/albulm/${id}`, {
    cache: "no-store",
  });
  return response.json();
}
