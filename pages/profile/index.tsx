import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const Wrapper = styled.div`
  width: 800px;
  border: 1px solid #000;
  margin: 30px auto;
`;

const Title = styled.h2`
  padding: 12px;
`;

const MainWrapper = styled.section`
  background-color: lightblue;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const ProfileWrapper = styled.div`
  background-color: lightcoral;
  width: 200px;
  height: 120px;
  border: 1px solid #000;
`;

export default function ProfilePage() {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const onClickProfileList = async () => {
      const result = await axios.get("http://localhost:3001/profile");
      console.log(result);
      setProfile(result.data);
    };
    onClickProfileList();
  }, []);

  const onClickDeleteList = (id: string) => () => {
    console.log(id);
    const newList = profile.filter((el) => el.id !== id);
    setProfile(newList);
    if (newList.length === 0) alert("There is no list");
  };

  return (
    <Wrapper>
      <Title>DB JSON Practice</Title>
      <div>Data List</div>
      <MainWrapper>
        {profile.map((el) => (
          <ProfileWrapper key={uuidv4()}>
            <div>{el.id}</div>
            <div>{el.name}</div>
            <div>{el.age}</div>
            <div>{el.gender}</div>
            <button onClick={onClickDeleteList(el.id)}>Delete</button>
          </ProfileWrapper>
        ))}
      </MainWrapper>
    </Wrapper>
  );
}
