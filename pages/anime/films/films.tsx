import { useState, useEffect } from "react";
import axios from "axios";

export default function Films() {
  const [films, setFilms] = useState([]);

  const handleData = async () => {
    try {
      await axios
        .get("https://ghibliapi.herokuapp.com/films")
        .then((response) => setFilms(new Array(response.data)));
      console.log(films);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <>
      {films[0]?.map((el, index) => (
        <div key={index}>
          <div>{el.title}</div>
          <img src={el.image} />
        </div>
      ))}
    </>
  );
}
