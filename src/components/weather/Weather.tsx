import * as React from 'react';
import {useEffect} from 'react';
import {getWeatherForecast} from '../../redux/actions/actionCreators';
import {View, Text, Button, FlatList} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useDispatch} from 'react-redux';
import {useTypedSelector} from '../../hooks/useTypeSelector';
import {timeConverter} from '../../config/Utils';
import {IMAGE_URL, months} from '../../config/Const';
import {WeatherInterface, WeatherDayInterface} from '../../types/weather.types';
import styles from './styles';

const renderItem = (data: WeatherInterface) => {
  console.log('DATA 444', data);
  const {item} = data;
  const thisItem = item.shift();

  let nowHours: Number = new Date().getHours();
  let forecast = item[0];

  const times = [];
  forecast.map(el => {
    times.push(el.time);
  });
  console.log('times', times);
  const nearTime = times.reduce((prev: Number, curr: Number) => {
    let chuslo: Number;
    if ((nowHours: Number) => prev && nowHours <= curr) {
      chuslo === curr;
      return curr;
    }
  });

  console.log('NEAR', nearTime);

  let dayWeather: WeatherDayInterface = {};
  /*const res = Object.keys(forecast).map(key => {
    return {[key]: forecast[key as keyof typeof forecast]};
  });*/

  forecast.map(el => {
    if (nearTime === el.time) {
      dayWeather = el.element;
    }
  });
  console.log('ELEMENT by 22', dayWeather);
  const {dt, weather, main} = dayWeather;
  const {temp} = main;
  const weatherEl = weather[0];
  const {description, icon} = weatherEl;
  const iconurl = IMAGE_URL + icon + '.png';
  console.log('iconurl', iconurl);
  console.log('dt', dt, main, main.temp);

  //smth wrong with iconurl, fast image working with test uri https://unsplash.it/400/400?image=1
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.cellContainer}>
          <View style={styles.imageView}>
            <FastImage
              style={styles.image}
              source={{
                uri: iconurl,
              }}
              resizeMode={FastImage.resizeMode.stretch}
            />
          </View>
          <View style={styles.timeView}>
            <Text style={styles.timeText}>{timeConverter(dt)}</Text>
          </View>
          <View style={styles.tempDayNight}>
            <Text style={styles.tempDayNightText}>
              {Math.floor(temp) + '℃'}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

function Weather() {
  const dispatch = useDispatch();
  const data = useTypedSelector(state => state.weather);
  console.log('DATA', data);

  useEffect(() => {
    dispatch(getWeatherForecast());
  }, []);

  if (!data) return null;
  const {list} = data.forecast;
  if (!list) return null;

  let dailyData = {};
  list.forEach(element => {
    const dateTime = new Date(element.dt * 1000);
    const day = dateTime.getDate();
    const time = dateTime.getHours();
    const month = months[dateTime.getMonth()];
    const t = month + '.' + day;
    if (!dailyData[t]) dailyData[t] = [];
    dailyData[t].push({time, element, day});
  });
  const weatherFor5Days = Object.entries(dailyData);

  return (
    <View style={styles.generalContainer}>
      <FlatList
        data={weatherFor5Days}
        renderItem={item => {
          return renderItem(item);
        }}
      />
    </View>
  );
}

export default Weather;
