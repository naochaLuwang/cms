export async function getAllDepartments() {
  const response = await fetch(`${process.env.API_URL}/api/department`, {
    cache: "no-store",
  });
  return response.json();
}
