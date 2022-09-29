import styled from "@emotion/styled";
import Films from "./films/films";
import axios from "axios";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const Title = styled.h2`
  padding: 8px;
`;

const AnimeWrapper = styled.div``;

export default function Anime() {
  // films, people, location
  const [list, setList] = useState([]);
  const [film, setFilm] = useState([]);
  const [ppl, setPpl] = useState([]);
  const [location, setLocation] = useState([]);

  const filmUrl = axios.get("https://ghibliapi.herokuapp.com/films");
  const pplUrl = axios.get("https://ghibliapi.herokuapp.com/people");
  const locationUrl = axios.get("https://ghibliapi.herokuapp.com/locations");

  const handleData = () => {
    try {
      Promise.all([filmUrl, pplUrl, locationUrl]).then((response) =>
        setList(response)
      );
      console.log(list);
      setFilm(new Array(list[0].data));
      setPpl(new Array(list[1].data));
      setLocation(new Array(list[2].data));
    } catch (error) {
      console.log(error.message);
    }
  };

  const onHandleData = async () => {
    await filmUrl.then((response) => console.log(response));
  };

  useEffect(() => {
    onHandleData();
  }, []);

  useEffect(() => {
    handleData();
  }, []);

  return (
    <Wrapper>
      <Title>Animation Info</Title>
      {film[0]?.map((el, index) => (
        <div key={index}>
          <div>{el.title}</div>
        </div>
      ))}
      {ppl[0]?.map((el, index) => (
        <div key={index}>
          <div>{el.name}</div>
        </div>
      ))}
    </Wrapper>
  );
}
