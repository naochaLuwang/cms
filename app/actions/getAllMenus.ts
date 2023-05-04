export async function getAllMenus() {
  const response = await fetch(`${process.env.API_URL}/api/menu`, {
    cache: "no-store",
  });
  return response.json();
}
