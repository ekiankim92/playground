import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { dummyData } from "./dummy";

interface BarProps {
  height: number;
}

interface SecondBar {
  custom: number;
}

interface CardProps {
  el: typeof dummyData[0];
}

export default function GetBoundingClientRect() {
  const Card = ({ el }: CardProps) => {
    const [uuid, setUuid] = useState("");

    useEffect(() => {
      setUuid(uuidv4());
    }, []);

    useEffect(() => {
      const container = document.getElementsByClassName(`${uuid}`);

      const firstPlotLine = container[0]?.getElementsByClassName("firstbar");
      const secondPlotLine = container[0]?.getElementsByClassName("secondbar");

      const redLine =
        firstPlotLine?.[0]
          .getElementsByClassName("firstbar_border")[0]
          .getBoundingClientRect().top -
        container[0]?.getBoundingClientRect().top;

      const blueLine =
        secondPlotLine?.[0]
          .getElementsByClassName("secondbar_border")[0]
          .getBoundingClientRect().top -
        container[0]?.getBoundingClientRect().top;

      const midLine = (redLine - blueLine) / 2;

      const arrowImg = document.createElement("img");
      arrowImg.setAttribute("src", "/down.png");
      arrowImg.setAttribute(
        "style",
        `width: 10px; height: 10px; position: absolute; top: ${
          blueLine + midLine
        }px; left: 130px;`
      );

      container[0]?.appendChild(arrowImg);
    }, [uuid]);

    return (
      <Cards className={`${uuid}`}>
        <div>name: {el.name}</div>
        <Gender>gender: {el.gender}</Gender>
        <ChartWrapper>
          <FirstBarWrapper>
            <FirstBar height={el.firstHeight} className="firstbar">
              <div className="firstbar_border" />
            </FirstBar>
          </FirstBarWrapper>
          <SecondBarWrapper>
            <SecondBar custom={el.secondHeight} className="secondbar">
              <div className="secondbar_border" />
            </SecondBar>
          </SecondBarWrapper>
        </ChartWrapper>
      </Cards>
    );
  };

  return (
    <>
      <CardWrapper>
        {dummyData.map((el) => (
          <Card key={el.id} el={el} />
        ))}
      </CardWrapper>
    </>
  );
}

const Arrow = styled.img`
  width: 10px;
  height: 10px;
  position: absolute;
  top: 104px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Cards = styled.div`
  width: 280px;
  height: 180px;
  margin: 20px;
  border: 1px solid #000;
  box-shadow: 0px 0px 4px rgba(0, 0, 051);
  position: relative;
`;

const Gender = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid #ededed;
`;

const ChartWrapper = styled.div`
  width: 100%;
  height: 74%;
  display: flex;
`;

const FirstBarWrapper = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  width: 50%;
  height: 100%;
`;

const FirstBar = styled.div<BarProps>`
  position: relative;
  bottom: 0px;
  width: 40px;
  height: 80px;
  height: ${(props) => props.height}px;
  background: yellow;

  .firstbar_border {
    position: relative;
    width: 160px;
    border-top: 1px dashed red;
  }
`;

const SecondBarWrapper = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  width: 50%;
  height: 100%;
`;

const SecondBar = styled.div<SecondBar>`
  position: relative;
  width: 30px;
  height: ${(props) => props.custom}px;
  background: blue;

  .secondbar_border {
    position: relative;
    right: 144px;
    width: 160px;
    border-top: 1px dashed blue;
  }
`;
