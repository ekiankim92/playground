import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  border: 1px solid #000;
`;

const Img = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const RandomImg = () => {
  const [img, setImg] = useState<any>([]);

  // prettier-ignore
  const randomImg = ["bowl.png", "bowl3.png", "cage.png", "cloth.png", "cross.png", "dollar.png", "toy3.png"]

  useEffect(() => {
    setImg(randomImg[String(Math.floor(Math.random() * randomImg.length))]);
  }, []);

  return (
    <>
      <div>Random images</div>
      <Wrapper>
        <Img src={img} />
      </Wrapper>
    </>
  );
};
export default RandomImg;
