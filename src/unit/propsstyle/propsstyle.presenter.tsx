import * as S from "./propsstyle.styles";

interface PropsPropsStyleUI {
  onClickChangeFont: () => void;
  isFont: boolean;
}

export default function PropsStyleUI(props: PropsPropsStyleUI) {
  return (
    <S.Wrapper>
      <div>Hello WOrld</div>
      <div isFont={false} onClick={props.onClickChangeFont}>
        The color font will change!
      </div>
    </S.Wrapper>
  );
}
