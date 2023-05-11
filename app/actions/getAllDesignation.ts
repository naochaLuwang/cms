export async function getAllDesignation():Promise<DesignationProps[]> {
  const response:Response = await fetch(`${process.env.API_URL}/api/designation`, {
    cache: "no-store",
  });
  return response.json();
}
