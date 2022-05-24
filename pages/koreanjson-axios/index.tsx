import styled from "@emotion/styled";
import axios from "axios";
import { useEffect, useState } from "react";
const Wrapper = styled.div`
  width: 600px;
  height: 600px;
  border: 1px solid #000;
  margin: 60px auto;
`;

const KoreanJsonAxois = () => {
  const [koreanLaw, setKoreanLaw] = useState([]);
  const [koreanDate, setKoreanDate] = useState("");
  const [posts, setPosts] = useState([]);

  const onClickKoreanLaw = async () => {
    // new Array(1).fill(1).forEach(async (_) => {
    const result = await axios.get("https://koreanjson.com/users/");
    setKoreanLaw(result.data);
    console.log(result);
    // });
    // onClickKoreanLaw();
  };

  const onClickKoreanDate = async () => {
    const result = await axios.get("https://koreanjson.com/posts/1");
    setKoreanDate(result.data?.createdAt);
    console.log(result);
  };

  // const multipleKoreanLaw = async () => {
  //   new Array(10).fill(1).forEach(async (_) => (
  //     const result = await axios.get("https://koreanjson.com/posts")
  //     const constitution = () => {
  //       setKoreanDate(prev, result.data?.content)
  //     }
  //     multipleKoreanLaw()
  //   ))
  // }

  // useEffect(() => {
  //   const testing = async () => {
  //     const result = await axios.get(
  //       "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR"
  //     );
  //     console.log(result.data);
  //   };
  //   testing();
  // }, []);

  const onClickDbServer = async () => {
    alert("testing");
    const result = await axios.get("http://localhost:3001/profile");
    console.log(result);
  };

  return (
    <Wrapper>
      <div>Hello WOrld</div>
      <div>
        {koreanLaw.map((el) => (
          <div key={el}>
            <span style={{ marginRight: "16px" }}>{el.name}</span>
            <span style={{ marginRight: "16px" }}>{el.email}</span>
            <span style={{ marginRight: "16px" }}>{el.phone}</span>
            <span style={{ marginRight: "16px" }}>{el.username}</span>
          </div>
        ))}
      </div>
      {/* <div>{koreanLaw}</div> */}
      <button onClick={onClickKoreanLaw}>Click Here</button>
      <div>=========================================================</div>
      <div>{koreanDate.slice(0, 10)}</div>
      <button onClick={onClickKoreanDate}>Set Up a Date</button>
      <div>=========================================================</div>
      <button onClick={onClickDbServer}>Click Here</button>
    </Wrapper>
  );
};
export default KoreanJsonAxois;
