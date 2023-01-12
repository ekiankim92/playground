import axios from "axios";
import { MouseEvent, useEffect, useState } from "react";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useRouter } from "next/router";

export default function CrudUpdate() {
  const [todoList, setTodoList] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const router = useRouter();

  const handleData = async () => {
    const result = await axios.get("http://localhost:8080/todos", {
      headers: {
        authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.YWFhYUBnbWFpbC5jb20.w4b9tgnb8G7x7KCQqh231aI4dLLLmZHNTqGitkctl6I`,
      },
    });
    setTodoList(result.data?.data);
  };

  const getTodoById = async (event) => {
    // console.log(event.target.id);
    const id = event.target.id;
    console.log("id:", id);

    const result = await axios.get(`http://localhost:8080/${id}`, {
      headers: {
        authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.YWFhYUBnbWFpbC5jb20.w4b9tgnb8G7x7KCQqh231aI4dLLLmZHNTqGitkctl6I`,
      },
    });
    console.log("result:", result);
    // return result.data?.data;
    // router.push("/crudDetail");
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <>
      <h2>This is update page</h2>
      {todoList.map((el: any) => (
        <ListWrapper key={el.id} id={el.id}>
          <div>{el.title}</div>
          <div id={el.id} onClick={getTodoById}>
            {el.content}
          </div>
          <button>Edit</button>
        </ListWrapper>
      ))}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2>Edit</h2>
          <TitleInput placeholder="Title" />
          <ContentInput placeholder="Content" />
          <ConfirmButton>Confirm</ConfirmButton>
        </Box>
      </Modal>
    </>
  );
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

const ListWrapper = styled.div`
  width: 240px;
  height: 80px;
  border: 1px solid #000;
  margin: 20px;
`;

const TitleInput = styled.input`
  width: 420px;
  height: 40px;
  padding-left: 10px;
  font-size: 18px;
  margin: 40px;
`;

const ContentInput = styled.input`
  width: 420px;
  height: 120px;
  text-overflow: ellipsis;
  padding-left: 10px;
  font-size: 18px;
`;

const ConfirmButton = styled.button`
  width: 420px;
  height: 60px;
  border: none;
  margin: 20px;
  :hover {
    cursor: pointer;
  }
`;
