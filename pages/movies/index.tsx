import axios from "axios";
import { useEffect, useState } from "react";
import { v4 as uuidv } from "uuid";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";

const Slide = styled(Slider)`
  width: 100%;
  height: 160px;
`;

const MoviePage = () => {
  const [data, setData] = useState([]);
  const movieKey = process.env.NEXT_PUBLIC_MOVIE_KEY;
  const date = new Date(Date.now() - 48 * 3600 * 1000)
    .toISOString()
    .slice(0, 10)
    .replaceAll("-", "");

  console.log("movieKey:", movieKey);

  const handleData = async () => {
    try {
      const result = await axios.get(
        `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=${date}`
      );
      setData(result.data.boxOfficeResult.dailyBoxOfficeList);
    } catch (error) {
      if (error instanceof Error) console.log("error.message:", error.message);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <>
      <div>Movie Page</div>
      <Slide {...settings}>
        {data.map((el) => (
          <div key={uuidv()}>
            <div>{el.rank}</div>
            <div>{el.movieNm}</div>
          </div>
        ))}
      </Slide>
    </>
  );
};
export default MoviePage;
