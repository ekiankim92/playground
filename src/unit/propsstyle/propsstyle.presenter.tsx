import { ChangeEvent, useState } from "react";
import * as S from "./propsstyle.styles";

interface PropsPropsStyleUI {
  onClickChangeFont: () => void;
  onClickSubmit: () => void;
  isFont: boolean;
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function PropsStyleUI(props: PropsPropsStyleUI) {
  const [isTrue, setIsTrue] = useState(false);

  const handleOnClick = () => {
    console.log("second text testing");
    setIsTrue((prev) => !prev);
  };

  return (
    <S.Wrapper>
      <div>Hello WOrld</div>
      <S.Text isFont={props.isFont} onClick={props.onClickChangeFont}>
        The color font will change!
      </S.Text>
      <S.SecondText isTrue={isTrue} onClick={handleOnClick}>
        This is the second color font will change!
      </S.SecondText>
      <hr />
      <div>Second Test</div>
      <S.SecondWrapper>
        <label>User Name:</label>
        <S.InfoInput
          type="text"
          placeholder="이름을 넣어주세요"
          onChange={props.onChangeInput}
          name="username"
        />
        <br />
        <label>Password:</label>
        <S.InfoInput
          type="text"
          placeholder="비밀번호를 넣어주세요"
          onChange={props.onChangeInput}
          name="password"
        />
        <br />
        <S.SubmitButton
          disabled={props.isDisable}
          onClick={props.onClickSubmit}
        >
          Submit
        </S.SubmitButton>
      </S.SecondWrapper>
    </S.Wrapper>
  );
}
