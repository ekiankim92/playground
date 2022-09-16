import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

const mapKey = process.env.NEXT_PUBLIC_MAP_API_KEY; // app key from .env
console.log("mapKey:", mapKey);

export default function KakaoMap(props) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${mapKey}&libraries=services`;

    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.4565, 126.95),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);

        const geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch(
          //   "제주특별자치도 제주시 첨단로 242",
          props?.address,
          //   "대전 동구 판교2길 7",
          function (result: any, status: any) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              var coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              // 결과값으로 받은 위치를 마커로 표시합니다
              var marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
                text: props.zonecode,
              });

              // 인포윈도우로 장소에 대한 설명을 표시합니다
              var infowindow = new window.kakao.maps.InfoWindow({
                content:
                  //   '<div style="width:150px;text-align:center;padding:6px 0;"></div>',
                  props.zonecode,
              });
              infowindow.open(map, marker);

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, [props.address]);

  return (
    <>
      <div id="map" style={{ width: "100%", height: "100%" }} />
    </>
  );
}
