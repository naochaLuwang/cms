export async function getDepartment(id: string) {
  const response = await fetch(`${process.env.API_URL}/api/department/${id}`, {
    cache: "no-store",
  });
  return response.json();
}
