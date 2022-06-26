import styled from "@emotion/styled";

export const Container = styled.div`
  width: 1200px;
  border: 1px solid #000;
  margin: 40px auto;
`;

export const Title = styled.h2`
  padding: 12px;
`;

export const SubmitWrapper = styled.div`
  width: 600px;
  height: 300px;
  margin: 0px 0px 40px 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #fafafa;
  align-items: center;
`;

export const SubmitTitle = styled.h2`
  text-align: center;
`;

export const NameInput = styled.input`
  width: 240px;
  height: 40px;
  padding: 12px;
  margin: 12px;
  ::placeholder {
    padding: 6px;
    opacity: 0.4;
  }
`;

export const KoreanInput = styled.input`
  width: 240px;
  height: 40px;
  padding: 12px;
  margin: 12px;
  ::placeholder {
    padding: 6px;
    opacity: 0.4;
  }
`;

export const MathInput = styled.input`
  width: 240px;
  height: 40px;
  padding: 12px;
  margin: 12px;
  ::placeholder {
    padding: 6px;
    opacity: 0.4;
  }
`;

export const EnglishInput = styled.input`
  width: 240px;
  height: 40px;
  padding: 12px;
  margin: 12px;
  ::placeholder {
    padding: 6px;
    opacity: 0.4;
  }
`;

export const TableHeader = styled.div`
  width: 1000px;
  height: 52px;
  background-color: #fafafa;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
`;

export const HeaderName = styled.div``;

export const HeaderKorean = styled.div``;

export const HeaderMath = styled.div``;

export const HeaderEnglish = styled.div``;

export const TableDate = styled.div`
  width: 1000px;
  height: 42px;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NameData = styled.div`
  width: 200px;
`;

export const KoreanData = styled.div`
  width: 242px;
`;

export const MathData = styled.div`
  width: 160px;
  padding-left: 20px;
`;

export const EnglishData = styled.div`
  width: 200px;
  text-align: center;
  padding-left: 22px;
`;
