export async function getAllLinks() {
  const response = await fetch(`${process.env.API_URL}/api/links`, {
    cache: "no-store",
  });
  return response.json();
}
