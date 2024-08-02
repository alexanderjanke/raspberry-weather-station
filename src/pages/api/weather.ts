import type { APIRoute } from "astro";

export const get: APIRoute = async ({ params, request }) => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.WEATHER_API
    }&q=Ahlden&days=3&alerts=no`
  );

  return {
    body: JSON.stringify(await response.json()),
  };
};
