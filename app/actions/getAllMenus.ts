export async function getAllMenus() {
  const response = await fetch("http://localhost:3000/api/menu", {
    cache: "no-store",
  });
  return response.json();
}
