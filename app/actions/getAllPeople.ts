export async function getAllPeople() {
  const response = await fetch(`${process.env.API_URL}/api/people`, {
    cache: "no-store",
  });
  return response.json();
}
