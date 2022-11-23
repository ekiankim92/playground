import styled from "@emotion/styled";
import { WheelEvent } from "react";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  overflow-x: scroll;
  background: lightyellow;
`;

const Boxes = styled.div`
  min-width: 260px;
  max-height: 260px;
  border: 1px solid #000;
  margin: 20px;
`;

const AxisPage = () => {
  const onScrollEvent = (event: WheelEvent<HTMLDivElement>) => {
    const delta = Math.max(
      -1,
      Math.min(1, event.nativeEvent.deltaY || -event.nativeEvent.detail)
    );
    event.currentTarget.scrollLeft -= delta * 80;
    event.preventDefault;
  };

  return (
    <>
      <div>X and Y Axis</div>
      {new Array(1).fill(1).map((index) => (
        <Wrapper key={index} onWheel={onScrollEvent}>
          <Boxes>1</Boxes>
          <Boxes>2</Boxes>
          <Boxes>3</Boxes>
          <Boxes>4</Boxes>
          <Boxes>5</Boxes>
          <Boxes>6</Boxes>
          <Boxes>7</Boxes>
          <Boxes>8</Boxes>
          <Boxes>9</Boxes>
          <Boxes>10</Boxes>
        </Wrapper>
      ))}
      <hr />
      <span>This poriton will be second portions!</span>
      <span>This poriton will be second portions!</span>
      <span>This poriton will be second portions!</span>
      <span>This poriton will be second portions!</span>
      <span>This poriton will be second portions!</span>
      <span>This poriton will be second portions!</span>
      <span>This poriton will be second portions!</span>
      {new Array(10).fill(1).map((index) => (
        <div>
          <Boxes>BOX</Boxes>
        </div>
      ))}
    </>
  );
};
export default AxisPage;
