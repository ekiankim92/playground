import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 1300px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 20px auto;
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;
`;

export default function BuxiHeaders() {
  return (
    <Wrapper>
      <span>No.</span>
      <span>예약번호</span>
      <span>고객명</span>
      <span>결제금액</span>
      <span>결제수단</span>
    </Wrapper>
  );
}
