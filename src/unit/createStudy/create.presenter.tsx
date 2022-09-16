import * as S from "./create.styles";
import DaumPostcode from "react-daum-postcode";
import KakaoMap from "./map/map";

export default function CreateStudyUI(props) {
  console.log("props.address:", props.address);

  const list = {
    address: props.address.address,
    addressEng: props.address.addressEnglish,
    zonecode: props.address.zonecode,
  };

  return (
    <S.Wrapper>
      <S.Title>Create Study</S.Title>
      <S.ContentWrapper>
        <S.CreateWrapper>
          <S.SearchButton onClick={props.handleComplete}>
            Search for location
          </S.SearchButton>
          <DaumPostcode onComplete={props.handleComplete} />
          <div>주소: {list.address}</div>
          <div>Address: {list.addressEng}</div>
        </S.CreateWrapper>
        <S.MapWrapper>
          <div>Kakao Map</div>
          <KakaoMap address={list.address} zonecode={list.zonecode} />
        </S.MapWrapper>
      </S.ContentWrapper>
    </S.Wrapper>
  );
}
