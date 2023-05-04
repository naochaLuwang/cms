export async function getAllSubsubMenus() {
  const response = await fetch(`${process.env.API_URL}/api/subsubmenu`, {
    cache: "no-store",
  });
  return response.json();
}
