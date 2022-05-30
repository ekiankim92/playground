import styled from "@emotion/styled";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// const Wrapper = styled.div`
//   width: 800px;
//   height: 800px;
//   border: 1px solid #000;
//   margin: 20px auto;
// `;

// const Title = styled.h2`
//   padding: 12px;
// `;

const ListWrapper = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid #000;
`;

const DraggablePage = () => {
  const defaultList = ["A", "B", "C", "D", "E"];
  // React state to track order of items
  const [itemList, setItemList] = useState(defaultList);

  // Function to update list on drop
  const handleDrop = (droppedItem) => {
    // Ignore drop outside droppable container
    if (!droppedItem.destination) return;
    const updatedList = [...itemList];
    // Remove dragged item
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
    // Add dropped item
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
    // Update State
    setItemList(updatedList);
  };

  return (
    // <Wrapper>
    //   <Title>Drag and Drop Practice</Title>
    //   <DragDropContext onDradEnd={handleDrop}>
    //     <Droppable>
    //       <div {...provided.droppableProps} ref={provided.innerRef}>
    //       <div>
    //         {itemList.map((item, index) => (
    //           <Draggable key={item} draggableId={item} index={index}>
    //             {(provided) => (
    //               <div
    //                 {...provided.dragHandleProps}
    //                 {...provided.draggableProps}
    //                 ref={provided.innerRef}
    //               >
    //                 {item}
    //               </div>
    //             )}
    //           </Draggable>
    //         ))}
    //         {provided.placeholder}
    //       </div>
    //     </Droppable>
    //   </DragDropContext>
    // </Wrapper>
    <div className="App">
      <DragDropContext onDragEnd={handleDrop}>
        <Droppable droppableId="list-container">
          {(provided) => (
            <div
              className="list-container"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {itemList.map((item, index) => (
                <Draggable key={item} draggableId={item} index={index}>
                  {(provided) => (
                    <ListWrapper
                      className="item-container"
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                    >
                      {item}
                    </ListWrapper>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
export default DraggablePage;
