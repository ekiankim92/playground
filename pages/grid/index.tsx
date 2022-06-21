import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 1400px;
  height: 1100px;
  border: 1px solid #000;
  margin: 20px auto;
`;

const Title = styled.h2`
  padding: 12px;
`;

const GridContainer = styled.div`
  /* display: grid; */
  .container {
    /* display: grid; */
    /* grid-template-columns: 1fr 1fr 1fr; */
    grid-template-columns: repeat(3, 1fr)
    /* grid-template-rows: 1fr 1fr 1fr; */
    /* row-gap: 10px; */
    /* background-color: lightblue; */
    color: red;
  }
  .item:nth-child(1) {
    /* grid-column: 1/4; */
    /* grid-row: 1/4; */
    background-color: lightblue;
  }
  .item:nth-child(2) {
    background-color: beige;
  }
  /* background-color: lightgreen; */
  .item1 {
      border: 1px solid #000;
      color: red;
        grid-column: 1 / 3
        grid-row: 1
        background-color: yellow;
  }
  .item2 {
    border: 1px solid #000;
      color: blue;
  }
  .item3 {
    border: 1px solid #000;
      color: red;
  }
  .item4 {
    border: 1px solid #000;
      color: blue;
  }
  .item5 {
    border: 1px solid #000;
      color: red;
  }
  .item6 {
    border: 1px solid #000;
      color: blue;
  }
  .item7 {
    border: 1px solid #000;
      color: red;
  }
  .item8 {
    border: 1px solid #000;
      color: blue;
  }
  .item9 {
    border: 1px solid #000;
      color: red;
  }
`;

const style = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "32px",
};

export default function GridPage() {
  return (
    <Wrapper>
      <Title>Grid Pracetice</Title>
      <GridContainer className="container" style={style}>
        <div className="item1">Item 1</div>
        <div className="item2">Item 2</div>
        <div className="item3">Item 3</div>
        <div className="item4">Item 4</div>
        <div className="item5">Item 5</div>
        <div className="item6">Item 6</div>
        <div className="item7">Item 7</div>
        <div className="item8">Item 8</div>
        <div className="item9">Item 9</div>
      </GridContainer>
    </Wrapper>
  );
}
