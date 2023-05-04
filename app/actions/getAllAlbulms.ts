export async function getAllAlbulms() {
  const response = await fetch(`${process.env.API_URL}/api/albulm`, {
    cache: "no-store",
  });
  return response.json();
}
