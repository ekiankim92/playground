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
  height: 400px;
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
  :focus {
    color: blue;
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
  :focus {
    color: green;
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
  :focus {
    color: coral;
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

export const SubmitButton = styled.button`
  width: 220px;
  height: 36px;
  color: #fff;
  background-color: #000;
  border: none;
  :hover {
    cursor: pointer;
    opacity: 0.8;
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

export const NameHeader = styled.span`
  width: 192px;
  :hover {
    cursor: pointer;
    color: gray;
  }
`;

export const KscoreHeader = styled.span`
  width: 250px;
  :hover {
    cursor: pointer;
    color: gray;
  }
`;

export const MscoreHeader = styled.span`
  width: 228px;
  :hover {
    cursor: pointer;
    color: gray;
  }
`;

export const EscoreHeader = styled.span`
  width: 110px;
  :hover {
    cursor: pointer;
    color: gray;
  }
`;

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

export const ListDataWrapper = styled.div`
  width: 1000px;
  margin: 0px auto;
  display: flex;
`;

export const ListNameWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 266px;
`;

export const ListNameElement = styled.div`
  margin-bottom: 12px;
`;

export const ListKScoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 328px;
`;

export const ListKScoreElement = styled.div`
  margin-bottom: 12px;
`;

export const ListMScoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 160px;
`;

export const ListMScoreElement = styled.div`
  margin-bottom: 12px;
`;

export const ListEScoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 242px;
  text-align: center;
`;

export const ListEscoreElement = styled.div`
  margin-bottom: 12px;
  padding-left: 70px;
`;
