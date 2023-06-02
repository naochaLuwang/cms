export async function getProgramme(id: string): Promise<ProgrammeProps> {
  const response = await fetch(`${process.env.API_URL}/api/programme/${id}`, {
    cache: "no-store",
  });
  return response.json();
}
