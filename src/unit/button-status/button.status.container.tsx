import ButtonStatusUI from "./button.status.presenter";
import { useState } from "react";

const list = [
  { id: 1, name: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 2, name: "1984", author: "George Orwell" },
  { id: 3, name: "To Kill a Mockingbird", author: "Harper Lee" },
];

export default function ButtonStatus() {
  const [booksList, setBooksList] = useState([...list]);

  console.log("booksList:", booksList);

  const onClickRent = (id) => () => {
    console.log("id:", id);
    const newList = booksList.filter((el) => el.id !== id);
    setBooksList(newList);
    console.log("newList:", newList);
  };

  return <ButtonStatusUI booksList={booksList} onClickRent={onClickRent} />;
}
