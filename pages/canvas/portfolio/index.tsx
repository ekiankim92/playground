import styled from "@emotion/styled";

export default function Portfolio() {
  return (
    <Wrapper>
      <Title>Portfolio</Title>
      <div>
        <Area>Area</Area>
        <Rate>
          9,999,999,999 (9999) m<sup>2</sup>
        </Rate>
      </div>
      <div>
        <Usage>Usage</Usage>
        <Rate>
          9,999,999,999 (9999) m<sup>2</sup>
        </Rate>
      </div>
      <div>
        <Emissions>Emissions</Emissions>
        <Rate>
          9,999,999,999 (9999) m<sup>2</sup>
        </Rate>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 800px;
  border: 1px solid #000;
  margin: 22px;
  background-color: green;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin: 6px;
`;

const Area = styled.div`
  font-size: 16px;
  margin: 6px;
`;

const Usage = styled.div`
  font-size: 16px;
  margin: 6px;
`;

const Emissions = styled.div`
  font-size: 16px;
  margin: 6px;
`;

const Rate = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin: 10px;
`;
