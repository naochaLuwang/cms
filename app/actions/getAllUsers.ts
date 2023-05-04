export async function getAllUsers() {
  const response = await fetch(`${process.env.API_URL}/api/users`, {
    cache: "no-store",
  });
  return response.json();
}
