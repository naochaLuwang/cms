export async function getSubMenu(id: string) {
  const response = await fetch(`${process.env.API_URL}/api/submenu/${id}`, {
    cache: "no-store",
  });
  return response.json();
}
