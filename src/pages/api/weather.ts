import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params, request }) => {

  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.WEATHER_API
      }&q=Ahlden&days=3&alerts=no`
    );

    return new Response(
      JSON.stringify(await response.json())
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ type: "error", error }),
      { status: 500 }
    );
  }
};
