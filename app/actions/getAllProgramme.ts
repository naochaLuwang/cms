export async function getAllProgramme(): Promise<ProgrammeProps[]> {
  const response: Response = await fetch(
    `${process.env.API_URL}/api/programme`,
    {
      cache: "no-store",
    }
  );
  return response.json();
}
