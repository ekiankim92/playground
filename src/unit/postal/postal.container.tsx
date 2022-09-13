import PostalUI from "./postal.presenter";
import { useState } from "react";

export default function Postal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState({
    addressKor: "",
    addressEng: "",
    jibun: "",
    zonecode: "",
  });

  //   const [addressData, setAddressData] = useState({});

  const [addressData, setAddressData] = useState([]);

  const showModal = () => {
    setIsModalOpen(true);
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onHandleToggle = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleComplete = (data) => {
    console.log("data:", data);
    setAddress(data);
    // setAddressData(data);
    setAddressData([data]);
    setIsOpen((prev) => !prev);
  };

  return (
    <PostalUI
      isModalOpen={isModalOpen}
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
      onHandleToggle={onHandleToggle}
      handleComplete={handleComplete}
      isOpen={isOpen}
      address={address}
      addressData={addressData}
    />
  );
}
