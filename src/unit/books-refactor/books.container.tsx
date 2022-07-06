import axios from "axios";
import { useEffect, useState } from "react";
import BooksUI from "./books.presenter";

export default function Books() {
  const [booksList, setBooksList] = useState<string[]>([]);
  const [isRent, setIsRent] = useState<boolean>(false);
  const [elementId, setElementId] = useState<string>("0");

  useEffect(() => {
    const handleData = async () => {
      const result = await axios.get("http://localhost:3001/booksList");
      console.log("result:", result.data);
      setBooksList(result.data);
    };
    handleData();
  }, []);

  const onClickRent = (id: string, index: number) => () => {
    // alert("tesitng");
    // if (booksList.filter((el) => el.id === id)) {
    //   setIsRent((prev) => !prev);
    //   console.log("id:", id);
    // }
    setIsRent((prev) => !prev);
    console.log("id:", id);
    setElementId(id);
    console.log("index:", index);
  };

  return (
    <BooksUI
      booksList={booksList}
      isRent={isRent}
      onClickRent={onClickRent}
      elementId={elementId}
    />
  );
}
