export async function getMenu(id: any) {
  const response = await fetch(`${process.env.API_URL}/api/menu/${id}`, {
    cache: "no-store",
  });
  return response.json();
}
