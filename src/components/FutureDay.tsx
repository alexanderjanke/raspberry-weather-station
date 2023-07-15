export interface Props {
  maxTemp: number;
  minTemp: number;
  icon: string;
}

export default function FutureDay(props: Props) {
  return (
    <div class="flex justify-center">
      <div>
        <img class="w-28 h-28" src={props.icon} />
      </div>
      <div class="flex flex-col justify-center gap-4">
        <div class="text-white text-2xl">Max: {props.maxTemp}°C</div>
        <div class="text-white text-2xl">Min: {props.minTemp}°C</div>
      </div>
    </div>
  );
}
