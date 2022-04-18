import axios from "axios";
import { useEffect, useState } from "react";
import WeatherUI from "./weather.presenter";

export default function Weather() {
  const [seoulWeather, setSeoulWeather] = useState([]);
  //   const [isOpen, setIsOpen] = useState(false);

  const SubwayTime = async () => {
    const result = await axios.get(
      // api key 9db57d83d316fa5f2897fbae9e85e589
      "https://api.openweathermap.org/data/2.5/weather?q=seoul&unit=&lang=kr&appid="
    );
    // console.log("data:", result?.data);
    // setSeoulWeather(result);
    setSeoulWeather(result?.data);
    // setIsOpen((prev) => !prev);
    console.log(result);
    console.log(result.data?.main.temp);
    console.log(result.data?.main.feels_like);
    console.log(result.data?.coord?.lat);
    console.log(result.data?.coord?.lon);
    // console.log(result.data?.weather[0].description);
    console.log("result.data:", result?.data);
    console.log("seoulWeather:", result.data?.seoulWeather);
    console.log("seoulWeatherArray:", result?.data.weather);
  };

  useEffect(() => {
    const WeatherInfo = async () => {
      try {
        const result = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?q=seoul&unit=&lang=kr&appid=9db57d83d316fa5f2897fbae9e85e589"
        );
        setSeoulWeather(result.data);
        console.log("result.data:", result.data);
        // console.log("data:", data);
        console.log("seoulWeather:", seoulWeather);
      } catch (error) {
        console.log(error.message);
      }
    };
    WeatherInfo();
  }, []);

  return (
    <>
      <WeatherUI
        SubwayTime={SubwayTime}
        seoulWeather={seoulWeather}
        // isOpen={isOpen}
      />
      <div>============================================================</div>
      <div>Hello World</div>
      {/* {seoulWeather.map((el) => (
        <div key={el}>{el.name}</div>
      ))} */}
    </>
  );
}
