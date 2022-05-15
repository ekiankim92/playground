import styled from "@emotion/styled";
import { Switch } from "antd";
import "antd/dist/antd.css";
import { useState } from "react";

interface IProps {
  isNight?: boolean;
}

const Wrapper = styled.div`
  width: 600px;
  height: 600px;
  border: 1px solid #000;
  margin: 60px auto;
  background-color: ${(props: IProps) => (props.isNight ? "#fff" : "#000")};
`;

const Title = styled.h3`
  margin: 12px;
  color: ${(props: IProps) => (props.isNight ? "#000" : "#fff")};
`;

const ToggleWrapper = styled.div`
  width: 340px;
  text-align: end;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ParagraphWrapper = styled.div`
  margin-top: 20px;
  padding: 20px;
  line-height: 32px;
`;

const Main = styled.p`
  color: ${(props: IProps) => (props.isNight ? "#000" : "#fff")};
`;

const NightMode = () => {
  const [isNight, setIsNight] = useState(false);

  const onChangeToggle = (checked) => {
    console.log(`switch to ${checked}`);
    setIsNight((prev) => !prev);
  };

  return (
    <Wrapper isNight={isNight}>
      <TitleWrapper>
        <Title isNight={isNight}>Night/Day Mode Toggle</Title>
        <ToggleWrapper>
          <Switch defaultChecked onChange={onChangeToggle} />
        </ToggleWrapper>
      </TitleWrapper>
      <ParagraphWrapper>
        <Main isNight={isNight}>
          Click on the moon in the upper-right corner to change to night mode.
          Click again o the sun to change back to day mode.
        </Main>
      </ParagraphWrapper>
    </Wrapper>
  );
};
export default NightMode;
