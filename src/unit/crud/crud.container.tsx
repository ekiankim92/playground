import CrudUI from "./crud.presenter";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function Crud() {
  const baseUrl = "http://localhost:3001/profile";

  const [isEdit, setIsEdit] = useState(false);

  const [list, setList] = useState([]);

  const [inputs, setInputs] = useState({
    name: "",
    age: "",
    gender: "",
  });

  const nameRef = useRef(null);

  const onChangeInputs = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  //   const handleData = async () => {
  //     const result = await axios.get("http://localhost:3001/profile");
  //     console.log("result:", result.data);
  //   };

  const onClickSubmit = () => {
    const { name, age, gender } = inputs;
    try {
      axios
        .post(baseUrl, {
          name,
          age,
          gender,
        })
        .then((response) => {
          setList(response.data);
        });
    } catch (error) {
      console.log("submit error:", error.message);
    }
    console.log("list:", list);
  };

  const handleData = async () => {
    try {
      await axios({
        method: "get",
        url: "http://localhost:3001/profile",
      }).then((respnse) => {
        setList(respnse.data);
      });
    } catch (error) {
      console.log("error.message:", error.message);
    }
  };

  const onClickEdit = (id: string) => () => {
    console.log("update id:", id);

    const { name, age, gender } = inputs;

    try {
      axios
        .put(`${baseUrl}/${id}`, {
          name,
          age,
          gender,
        })
        .then((response) => {
          console.log(response.data);
        });
    } catch (error) {
      console.log("update error:", error.message);
    }
    console.log("this is edit");
  };

  const onClickUpdate = () => {
    setIsEdit(true);
  };

  const onClickDelete = (id: string) => () => {
    try {
      console.log("id:", id);
      const newList = list.filter((el) => el.id !== id);
      console.log("newList:", newList);
      axios.delete(`${baseUrl}/${id}`).then(() => setList(newList));
    } catch (error) {
      console.log("delete error:", error.message);
    }
  };

  useEffect(() => {
    handleData();
    console.log("list:", list);
  }, []);

  if (!list) return null;

  return (
    <CrudUI
      list={list}
      onClickSubmit={onClickSubmit}
      onChangeInputs={onChangeInputs}
      onClickDelete={onClickDelete}
      onClickEdit={onClickEdit}
      name={inputs.name}
      age={inputs.age}
      gender={inputs.gender}
      isEdit={isEdit}
      onClickUpdate={onClickUpdate}
      nameRef={nameRef}
    />
  );
}
