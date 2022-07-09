import ButtonStatusUI from "./button.status.presenter";
import { useState } from "react";

const list = [
  { id: 1, name: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 2, name: "1984", author: "George Orwell" },
  { id: 3, name: "To Kill a Mockingbird", author: "Harper Lee" },
];

export default function ButtonStatus() {
  const [booksList, setBooksList] = useState([...list]);
  const [selectId, setSelectId] = useState(0);
  const [isRent, setIsRent] = useState(false);

  console.log("booksList:", booksList);

  const onClickRent = (id) => () => {
    console.log("id:", id);
    alert("testing");

    // deleting an item
    // const newList = booksList.filter((el) => el.id !== id);
    // setBooksList(newList);

    setBooksList(booksList);
    setSelectId(id);

    setIsRent((prev) => !prev);

    // switch (id) {
    //   case 1:
    //     return setIsRent(true);
    //   case 2:
    //     return setIsRent(true);
    //   case 3:
    //     return setIsRent(true);
    //   default:
    //     return setIsRent(false);
    // }
  };

  return (
    <ButtonStatusUI
      booksList={booksList}
      onClickRent={onClickRent}
      selectId={selectId}
      isRent={isRent}
    />
  );
}
