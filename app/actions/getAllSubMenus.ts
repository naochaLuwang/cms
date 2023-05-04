export async function getAllSubMenus() {
  const response = await fetch(`${process.env.API_URL}/api/submenu`, {
    cache: "no-store",
  });
  return response.json();
}
