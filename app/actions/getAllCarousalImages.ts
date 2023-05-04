export async function getAllCarousalImages() {
  const response = await fetch(`${process.env.API_URL}/api/carousalimage`, {
    cache: "no-store",
  });
  return response.json();
}
