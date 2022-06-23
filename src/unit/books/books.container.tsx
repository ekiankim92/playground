import BooksUI from "./books.presenter";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Books() {
  const [booksList, setBooksList] = useState<string[]>([]);
  const [bookDetail, setBookDetail] = useState<string[]>([]);
  const [current, setCurrent] = useState<number>(1);
  const [secondPortion, setSecondPortion] = useState<string[]>([]);
  const [isPage, setIsPage] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isRent, setIsRent] = useState<boolean>(false);

  const onChangePagination = (page: number) => {
    console.log("page:", page);
    setCurrent(page);
    if (page === 2) {
      console.log("page2:", booksList.slice(10, 14));
      setIsPage(true);
      setSecondPortion(booksList.slice(10, 14));
    } else {
      setIsPage(false);
    }
  };

  const showModal = (id: string) => () => {
    // shows detailed information in popup
    const newList = booksList.filter((el: any) => el.id === id);
    setBookDetail(newList);
    setIsModalVisible(true);
    console.log("showModal ID:", id);
  };

  const handleOk = () => {
    alert("testing");
    setIsModalVisible(false);
    setIsRent((prev) => !prev);

    console.log("isRent:", isRent);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    const handleData = async () => {
      const result = await axios.get("http://localhost:3001/booksList");
      console.log("result.data:", result.data);
      setBooksList(result.data);
    };
    handleData();
  }, []);

  return (
    <BooksUI
      booksList={booksList}
      onChangePagination={onChangePagination}
      current={current}
      secondPortion={secondPortion}
      isPage={isPage}
      showModal={showModal}
      isModalVisible={isModalVisible}
      handleOk={handleOk}
      handleCancel={handleCancel}
      bookDetail={bookDetail}
      isRent={isRent}
    />
  );
}
