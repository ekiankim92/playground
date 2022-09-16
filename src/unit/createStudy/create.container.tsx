import { useState } from "react";
import CreateStudyUI from "./create.presenter";

export default function CreateStudy() {
  const [address, setAddress] = useState({});

  const handleComplete = (data) => {
    setAddress({ ...data });
  };

  return <CreateStudyUI handleComplete={handleComplete} address={address} />;
}
