import { useEffect } from "react";
import MapUI from "./map.presenter";
import * as S from "./map.styles";

declare const window: typeof globalThis & {
  kakao: any;
};

const mapKey = process.env.NEXT_PUBLIC_MAP_API_KEY;
console.log("mapKey:", mapKey);

export default function Map() {
  useEffect(() => {
    const script = document.createElement("script");
    // script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=66163b6b7b0e13d0d0c63d46c978cfc3`;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${mapKey}`;

    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.411447, 127.128594),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);

        const marker = new window.kakao.maps.Marker({
          position: map.getCenter(),
        });

        marker.setMap(map);

        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent) {
            const latlng = mouseEvent.latLng;

            marker.setPosition(latlng);
          }
        );
      });
    };
  }, []);

  return (
    <>
      <MapUI />
      <S.Map id="map" />
    </>
  );
}
