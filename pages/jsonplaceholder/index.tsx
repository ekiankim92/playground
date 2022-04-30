import styled from "@emotion/styled";
import axios from "axios";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  width: 600px;
  height: 600px;
  border: 1px solid #000;
  margin: 60px auto;
`;

export default function JsonPlaceholder() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const result = await axios.get(
        // "https://jsonplaceholder.typicode.com/users"
        // " https://foodish-api.herokuapp.com/images/rice/rice29.jpg"
        "./SearchJson.json"
      );
      setUsers(result.data);
      // setUsers(result.data.product.images[0]);
      // console.log("result:", result);
      // console.log("reulst.data.product.images:", result.data.product.images);
      // console.log("result.data:", result.data);
    };
    getUsers();
  }, []);

  return (
    <Wrapper>
      <div>Hello World</div>
      {/* {users.map((el) => (
        <div key={el}>
          <span>{el.id}</span> <br />
          <span>{el.name}</span>
          <span>{el.username}</span>
          <span>{el.address.city}</span>
          <span>{el.email}</span>
          <br />
          <br />
        </div>
      ))} */}
      <img src={users} />
      {/* <div>{users}</div> */}
      {/* <div>{users}</div> */}
    </Wrapper>
  );
}
