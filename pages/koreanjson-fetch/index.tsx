import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const Wrapper = styled.div`
  width: 600px;
  /* height: 600px; */
  border: 1px solid #000;
  margin: 60px auto;
`;

const KoreanJsonFetch = () => {
  //   const [koreanLaw, setKoreanLaw] = useState("");
  const [koreanLaw, setKoreanLaw] = useState([]);

  const onClickKoreanJson = () => {
    fetch("https://koreanjson.com/posts")
      .then((response) => response.json())
      .then((data) => setKoreanLaw(data))
      .catch((error) => console.log(error));
    // setKoreanLaw(result);
    // setKoreanLaw(result.json?.content);
  };

  useEffect(() => {
    onClickKoreanJson();
  }, []);

  //   const onClickKoreanJson = async () => {
  //     const result = await axios.get("https://koreanjson.com/posts");
  //     setKoreanLaw(result.data);
  //     console.log(result);
  //   };

  // useEffect(() => {
  //   try {
  //     const onClickKoreanJson = async () => {
  //       const result = await axios.get("https://koreanjson.com/posts");
  //       setKoreanLaw(result.data);
  //       console.log(result);
  //     };
  //     onClickKoreanJson();
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }, []);

  //   useEffect(() => {
  //     const onClickKoreanJson = async () => {
  //       try {
  //         const result = await axios.get("https://koreanjson.com/posts/1");
  //         setKoreanLaw(result.data?.content);
  //         console.log(result);
  //       } catch (error) {
  //         console.log(error.message);
  //       }
  //     };
  //     onClickKoreanJson();
  //   }, []);

  return (
    <Wrapper>
      <div>Bye Bye World</div>
      {/* <div>{koreanLaw}</div> */}
      {koreanLaw.map((el, index) => (
        <div key={uuidv4()}>
          {/* <div style={{ marginBottom: "-14px" }}>{el.id}</div> */}
          <span>{index + 1}</span>
          <div style={{ margin: "20px" }}>{el.content}</div>
        </div>
      ))}
      <div>================================================</div>
      {/* <button onClick={onClickKoreanJson}>Click Here</button> */}
    </Wrapper>
  );
};
export default KoreanJsonFetch;
