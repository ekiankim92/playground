import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Title = styled.div`
  padding: 24px;
  font-size: 20px;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const CreateWrapper = styled.section`
  width: 40%;
  height: 504px;
  border: 1px solid #d3d3d3;
  margin: 40px auto;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchButton = styled.button`
  width: 240px;
  height: 40px;
  border: none;
  border-radius: 8px;
  margin-top: 24px;
  :hover {
    cursor: pointer;
    opacity: 0.75;
  }
`;

export const MapWrapper = styled.section`
  width: 40%;
  height: 504px;
  border: 1px solid #d3d3d3;
  margin: 40px auto;
  border-radius: 8px;
`;
