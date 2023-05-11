export async function getDesignation(id: string): Promise<DesignationProps> {
  const response = await fetch(`${process.env.API_URL}/api/designation/${id}`, {
    cache: "no-store",
  });
  return response.json();
}
