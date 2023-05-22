import axios from "axios";
import { useEffect, useState } from "react";
import { dummyData } from "../getBoundingClientRect/dummy";
import IdList from "./id";

const ItemsList = () => {
  console.log("dummyData:", dummyData);
  const [list, setList] = useState(dummyData);
  const [newList, setNewList] = useState([]);

  const handleData = async () => {
    const result = await axios.get("http://localhost:8000/profile");
    console.log("result:", result.data);
    setNewList(result.data);
    return result.data;
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <>
      {newList.map((el, idx) => (
        <IdList
          el={el}
          list={list}
          setList={setList}
          setNewList={setNewList}
          newList={newList}
          idx={idx}
        />
      ))}
    </>
  );
};
export default ItemsList;
