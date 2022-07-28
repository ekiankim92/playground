import CrudUI from "./crud.presenter";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import _ from "lodash";

export default function Crud() {
  const baseUrl = "http://localhost:3001/profile";

  const [isEdit, setIsEdit] = useState(false);

  const [list, setList] = useState([]);

  const [inputs, setInputs] = useState({
    name: "",
    age: "",
    gender: "",
  });

  const [updated, setUpdated] = useState({
    newName: "",
    newAge: "",
    newGender: "",
  });

  const nameRef = useRef(null);

  const onChangeInputs = _.debounce((event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  }, 900);

  const onChangeUpdated = _.debounce((event) => {
    setUpdated({
      ...updated,
      [event.target.name]: event.target.value,
    });
    console.log("event.target.value:", event.target.value);
  });

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

  const onClickEdit = () => {
    setIsEdit(true);
  };

  const onClickConfirmUpdate = (id, event) => {
    console.log("testing if onClickUpdate is working");
    console.log("id:", id);
    event.preventDefault();
    return onClickUpdate(id);
  };

  const onClickUpdate = (id) => () => {
    const { newName, newAge, newGender } = updated;
    try {
      axios
        .put(`${baseUrl}/${id}`, {
          name: newName,
          age: newAge,
          gender: newGender,
        })
        .then((response) => {
          console.log("response:", response);
          setList(response.data);
        });
    } catch (error) {
      console.log("update error message:", error.message);
    }
  };

  const onClickCancel = () => {
    setIsEdit(false);
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
      nameRef={nameRef}
      onChangeUpdated={onChangeUpdated}
      onClickCancel={onClickCancel}
      onClickUpdate={onClickUpdate}
      onClickConfirmUpdate={onClickConfirmUpdate}
    />
  );
}
