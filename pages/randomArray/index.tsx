import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Image1 from "../../public/cloth.png";
import Image2 from "../../public/collar4.png";
import Image3 from "../../public/cage.png";

const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  border: 1px solid #000;
`;

const Img = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: contain;
  opacity: 0.75;
`;

const SecondWrapper = styled.div`
  width: 1300px;
  height: 300px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-size: 100%;
  border: 1px solid #000;
`;

const ThirdWrapper = styled.div`
  width: 1300px;
  height: 300px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-size: 100%;
  border: 1px solid #000;
  background-image: url("https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/bgQUBbZ14hfeb975yZ2YzTnAwen.jpg");
  /* background-image: url("../../src/commons/assets/toy3.png"); */
`;

const RandomImg = () => {
  const [img, setImg] = useState<any>([]);

  // prettier-ignore
  const randomImg = ["bowl.png", "bowl3.png", "cage.png", "cloth.png", "cross.png", "dollar.png", "toy3.png"]

  useEffect(() => {
    setImg(randomImg[String(Math.floor(Math.random() * randomImg.length))]);
  }, []);

  const pictureArray = [Image1?.src, Image2?.src, Image3?.src];
  const randomIndex = Math.floor(Math.random() * pictureArray.length);
  const selectedPicture = pictureArray[randomIndex];

  const style = {
    // backgroundImage: `url(${Image1})`,
    backgroundImage:
      "url(https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/VlHt27nCqOuTnuX6bku8QZapzO.jpg)",
    background: "lightblue",
  };

  console.log("Image1:", Image1?.src);

  console.log("selectedPicture:", selectedPicture);

  return (
    <>
      <div>Random images</div>
      <Wrapper>
        <Img src={img} />
      </Wrapper>
      <hr style={{ margin: 40 }} />
      <SecondWrapper style={{ backgroundImage: `url(${selectedPicture})` }}>
        <div>Background Image</div>
      </SecondWrapper>
      <ThirdWrapper>
        <div>Third Background Image</div>
      </ThirdWrapper>
    </>
  );
};
export default RandomImg;
