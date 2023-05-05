export async function getPerson(id: any) {
  const response = await fetch(`${process.env.API_URL}/api/people/${id}`, {
    cache: "no-store",
  });
  return response.json();
}
