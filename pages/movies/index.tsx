import axios from "axios";
import { useEffect, useState } from "react";

const MoviePage = () => {
  const [data, setData] = useState([]);
  const movieKey = process.env.NEXT_PUBLIC_MOIVE_API_KEY;

  console.log("movieKey:", movieKey);

  const handleData = async () => {
    try {
      const result = await axios.get(
        `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${movieKey}&targetDt=20221118`
        //   " http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=7804e6c136be09e53b652756f4dc8ed5&targetDt=20221111"
      );
      console.log("result:", result);
      console.log("result.data:", result.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <>
      <div>Movie Page</div>
    </>
  );
};
export default MoviePage;
