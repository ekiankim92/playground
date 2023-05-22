import axios from "axios";
import { useEffect, useState } from "react";
import { dummyData } from "../getBoundingClientRect/dummy";
import IdList from "./id";
import { v4 as uuidv } from "uuid";

const ItemsList = () => {
  const [list, setList] = useState(dummyData);
  const [newList, setNewList] = useState([]);

  const handleData = async () => {
    const result = await axios.get("http://localhost:8000/profile");
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
          key={uuidv()}
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
