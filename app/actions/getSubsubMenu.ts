export async function getSubsubMenu(id: any) {
  const response = await fetch(`${process.env.API_URL}/api/subsubmenu/${id}`, {
    cache: "no-store",
  });
  return response.json();
}
