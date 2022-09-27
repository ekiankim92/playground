import styled from "@emotion/styled";
import Films from "./films/films";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const Title = styled.h2`
  padding: 8px;
`;

const AnimeWrapper = styled.div``;

export default function Anime() {
  return (
    <Wrapper>
      <Title>Animation Info</Title>
      <Films />
    </Wrapper>
  );
}
