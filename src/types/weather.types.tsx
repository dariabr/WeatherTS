interface Main {
  temp?: number;
}

interface Element {
  dt: number;
  main: Main;
  weather: Array<{description: String; icon: String}>;
}
interface ArrType {
  time: number;
  element: Element;
}
export interface WeatherInterface {
  item: Array<ArrType>;
}

export interface WeatherDayInterface {
  dt: number;
  main: Main;
  weather: Array<{description: String; icon: String}>;
}
