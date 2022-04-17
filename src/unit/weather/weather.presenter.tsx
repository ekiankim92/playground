import * as S from "./weather.styles";
import { v4 as uuid4 } from "uuid";

export default function WeatherUI(props) {
  return (
    <S.Wrapper>
      <div>Subway Time</div>
      {!props.isOpen && (
        <>
          {/* <div>{props.seoulWeather.name}</div> */}
          {/* <div>{props.seoulWeather.timezone}</div> */}
          <div>
            {Math.floor(props.seoulWeather?.main?.temp - Number(274))} Celsius
          </div>
          <div>
            {Math.floor(props.seoulWeather?.main?.feels_like - Number(274))}{" "}
            Celsius
          </div>
          <div>{props.seoulWeather?.coord?.lat}</div>
          <div>{props.seoulWeather?.coord?.lon}</div>
          {/* <div>{props.seoulWeather?.weather[0]?.description}</div> */}
          <div>{props.seoulWeather?.wind?.deg} deg</div>
        </>
      )}
      <button onClick={props.SubwayTime}>Weather Description</button>
      <div>============================================================</div>
      <div>Weather Information</div>
      {/* {props.seoulWeather.map((el) => (
        <div key={uuid4()}>
          <div>{el.name}</div>
        </div>
      ))} */}
    </S.Wrapper>
  );
}
