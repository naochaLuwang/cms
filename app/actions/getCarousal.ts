export async function getCarousal(id: string) {
  const response = await fetch(
    `${process.env.API_URL}/api/carousalimage/${id}`,
    {
      cache: "no-store",
    }
  );
  return response.json();
}
