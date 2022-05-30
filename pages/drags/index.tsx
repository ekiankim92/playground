import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Wrapper = styled.div`
  width: 1000px;
  border: 1px solid #000;
  margin: 30px auto;
`;

const Title = styled.h2`
  padding: 12px;
`;

const TodoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 340px;
  border: 1px solid #000;
  background-color: lightblue;
`;

const TodoMap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 260px;
  height: 40px;
  border: 1px solid #000;
  margin: 8px;
`;

const TodoInput = styled.input`
  width: 360px;
  height: 40px;
  /* padding: 42px; */
  /* margin: 18px; */
  margin-left: 46px;
  padding: 12px;
  ::placeholder {
    opacity: 0.6;
  }
  :focus {
    outline: none;
    border: 1px solid lightcoral;
  }
`;

export default function DragsPage() {
  const todoLists = [
    { id: "1", title: "Study" },
    { id: "2", title: "Exercise" },
    { id: "3", title: "Read" },
    { id: "4", title: "Walk" },
    { id: "5", title: "Gaming" },
    { id: "6", title: "Run" },
  ];

  const [todos, setTodos] = useState(todoLists);
  const [addTodos, setAddTodos] = useState([]);

  const handleChange = (result) => {
    if (!result.destination) return;
    console.log(result);
    const items = [...todos];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTodos(items);
  };

  const onChangeAddList = (event: ChangeEvent<HTMLInputElement>) => {
    setAddTodos([event.target.value]);
  };

  const onClickAddList = () => {
    setAddTodos([...todos, addTodos]);
    console.log("todos:", todos);
    console.log("addTodos:", addTodos);
  };

  return (
    <Wrapper>
      <Title>Drag and Drop Second Practice</Title>
      <TodoInput
        type="text"
        placeholder="add list"
        onChange={onChangeAddList}
      />
      <button onClick={onClickAddList}>Add List</button>
      <DragDropContext onDragEnd={handleChange}>
        <Droppable droppableId="todos">
          {(provided) => (
            <ul
              className="todos"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {todos.map(({ id, title }, index) => (
                <Draggable key={id} draggableId={id} index={index}>
                  {(provided) => (
                    <TodoMap
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                    >
                      {index + 1}. {""}
                      {title}
                    </TodoMap>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </Wrapper>
  );
}
