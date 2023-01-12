import axios from "axios";
import { ChangeEvent, useState } from "react";

export default function TodoDetail() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [todoDetail, setTodoDetail] = useState([]);

  const updateTodo = async ({ id, title, content }) => {
    const result = await axios.put(
      `http://localhost:8080/${id}`,
      {
        title,
        content,
      },
      {
        headers: {
          authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.YWFhYUBnbWFpbC5jb20.w4b9tgnb8G7x7KCQqh231aI4dLLLmZHNTqGitkctl6I`,
        },
      }
    );
    console.log("result:", result);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    alert("title");
  };

  const onChangeContent = (event: ChangeEvent<HTMLInputElement>): void => {
    alert("content");
  };

  return (
    <>
      <h1>This is detail page</h1>
    </>
  );
}
