export async function getAllSubLinks() {
  const response = await fetch(`${process.env.API_URL}/api/sublinks`, {
    cache: "no-store",
  });
  return response.json();
}
