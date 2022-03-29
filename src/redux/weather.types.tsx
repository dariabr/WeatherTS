import {ImageSourcePropType} from 'react-native';
export interface ImgInterface {
  source: ImageSourcePropType;
  aspect: 'square' | 'portrait' | 'landscape';
}

export interface WeatherInterface {
  id: string;
  clouds: number;
  humidity: number;
  pressure: number;
  iconCode: string;
}

interface WeatherState {
  weather: WeatherInterface[];
}
