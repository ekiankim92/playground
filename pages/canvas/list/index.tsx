import axios from "axios";
import { useEffect } from "react";

export default function DataList() {
  const fetchData = async () => {
    const result = await axios
      .get("https://koreanjson.com/users")
      .then((res) => console.log("res:", res));
    return result;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>Data list</div>
    </>
  );
}
