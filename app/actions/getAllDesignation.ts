export async function getAllDesignation() {
  const response = await fetch(`${process.env.API_URL}/api/designation`, {
    cache: "no-store",
  });
  return response.json();
}
