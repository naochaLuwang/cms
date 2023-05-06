export async function getAllSubsublinks() {
  const response = await fetch(`${process.env.API_URL}/api/subsublinks`, {
    cache: "no-store",
  });
  return response.json();
}
