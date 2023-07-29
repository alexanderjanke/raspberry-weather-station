export interface Props {
  date: string;
  maxTemp: number;
  minTemp: number;
  icon: string;
}

export default function FutureDay(props: Props) {
  const date = new Date(props.date);
  return (
    <div class="flex flex-col">
      <div class="text-center text-2xl text-white">
        {date.toLocaleString("de-DE", { dateStyle: "full" })}
      </div>
      <div class="flex justify-center">
        <div>
          <img class="w-28 h-28" src={props.icon} />
        </div>
        <div class="flex flex-col justify-center gap-4">
          <div class="text-white text-2xl">Max: {props.maxTemp}°C</div>
          <div class="text-white text-2xl">Min: {props.minTemp}°C</div>
        </div>
      </div>
    </div>
  );
}
