import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 600px;
  height: 600px;
  border: 1px solid #000;
  margin: 60px auto;
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 300px;
  margin: 20px 0px 0px 20px;
  background-color: lightblue;
`;

export const SearchInput = styled.input`
  width: 220px;
  height: 40px;
  padding: 12px;
  ::placeholder {
    opacity: 0.6;
  }
`;

export const SearchImg = styled.img`
  width: 20px;
  height: 20px;
`;

export const HistoryWrapper = styled.div`
  width: 240px;
  margin-left: 60px;
  background-color: lightcoral;
`;

export const SearchAndDeleteWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

export const RecentSearch = styled.span`
  font-size: 10px;
  background-color: green;
`;

export const DeleteAllSearch = styled.span`
  font-size: 10px;
  background-color: yellow;
`;
