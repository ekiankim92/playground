import styled from "@emotion/styled";
import axios from "axios";
import { useState } from "react";

const Wrapper = styled.div`
  width: 600px;
  height: 600px;
  border: 1px solid #000;
  margin: 60px auto;
`;

const OpanAPIPage = () => {
  const [dogImg, setDogImg] = useState([]);

  const DogImg = async () => {
    new Array(1).fill(1).forEach(async (_) => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      const DogImages = () => {
        setDogImg((prev) => [...prev, result.data.message]);
        console.log(result);
      };
      DogImages();
    });
  };

  return (
    <Wrapper>
      <div>OPEN API Dogs Imgs</div>
      <div>=============================================</div>
      <div>{dogImg}</div>
      {/* <img src={dogImg} /> */}
      {dogImg.map((el) => (
        <>
          <div key={el}>
            <img src={el} />
          </div>
        </>
      ))}
      <div>=============================================</div>
      <button onClick={DogImg}>For More Pictures</button>
    </Wrapper>
  );
};
export default OpanAPIPage;
