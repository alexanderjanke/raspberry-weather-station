import { createSignal, onMount } from "solid-js";
import FutureDay from "./FutureDay";

interface Props {
  data: any;
}

export default function App(props: Props) {
  const [data, setData] = createSignal(props.data);

  async function fetchData() {
    const response = await fetch("/api/weather");
    setData(await response.json());
  }

  setInterval(async () => {
    await fetchData();
  }, 60000);

  return (
    <>
      {/* Today */}
      <div class="h-3/5 grid grid-flow-col px-14 gap-10">
        <div class="flex items-center gap-5 text-8xl font-semibold text-white">
          <div>
            <div>{data().current.temp_c}°C</div>
            <div class="text-2xl mt-2 font-normal">
              gefühlte {data().current.feelslike_c}°C
            </div>
          </div>
          <img class="w-28 h-28" src={data().current.condition.icon} />
        </div>
        <div class="flex flex-col justify-center text-white text-3xl gap-3">
          <div>Luftfeuchtigkeit: {data().current.humidity}%</div>
          <div>UV-Index: {data().current.uv}</div>
          <div>
            Regenchance:{" "}
            {data().forecast.forecastday[0].day.daily_chance_of_rain}%
          </div>
          <div>Max: {data().forecast.forecastday[0].day.maxtemp_c}°C</div>
          <div>Min: {data().forecast.forecastday[0].day.mintemp_c}°C</div>
        </div>
      </div>
      {/* Forecast */}
      <div class="h-2/5 grid grid-flow-col items-center">
        <FutureDay
          date={data().forecast.forecastday[1].date}
          maxTemp={data().forecast.forecastday[1].day.maxtemp_c}
          minTemp={data().forecast.forecastday[1].day.mintemp_c}
          icon={data().forecast.forecastday[1].day.condition.icon}
        />
        <FutureDay
          date={data().forecast.forecastday[2].date}
          maxTemp={data().forecast.forecastday[2].day.maxtemp_c}
          minTemp={data().forecast.forecastday[2].day.mintemp_c}
          icon={data().forecast.forecastday[2].day.condition.icon}
        />
        {/* Can only use 2 days in free API */}
        {/* <FutureDay
          maxTemp={data().forecast.forecastday[3].day.maxtemp_c}
          minTemp={data().forecast.forecastday[3].day.mintemp_c}
          icon={data().forecast.forecastday[3].day.condition.icon}
        /> */}
      </div>
    </>
  );
}
