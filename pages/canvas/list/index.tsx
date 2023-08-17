import axios from "axios";
import { useEffect, useState } from "react";

export default function DataList() {
  const [list, setList] = useState([]);

  const fetchData = async () => {
    const result = await axios
      .get("https://koreanjson.com/users")
      .then((res) => setList(res?.data));
    return result;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>Data list</div>
      {list.map((el) => (
        <div
          style={{
            border: "1px solid #000",
            width: 220,
            height: 120,
            margin: 42,
            background: "beige",
          }}
        >
          <div>{el.id}</div>
          <div>{el.name}</div>
          <div>{el.email}</div>
          <div>{el.district}</div>
          <div>{el.street}</div>
        </div>
      ))}
    </>
  );
}
