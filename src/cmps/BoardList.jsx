import { BoardPreview } from "./BoardPreview";
import { useState } from "react";
import { AddBoard } from "./AddBoard";
import { useDispatch } from "react-redux";
import { addBoard,reorderBoards } from "../store/actions/board.actions";
import { useSelector } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

export const BoardList = ({ boards }) => {
  const [isAddMode, setAddMode] = useState(false);

  const [bg, setBg] = useState("");

  const dispatch = useDispatch();

  const loggedUser = useSelector((state) => state.userModule.loggedUser);

  const [boardTitle, setBoardTitle] = useState("");

  const handleDragEnd = (result) => {
    const newBoards = [...boards] 
    const [reorderdBoard] = newBoards.splice(result.source.index,1)
    newBoards.splice(result.destination.index,0,reorderdBoard)
    dispatch(reorderBoards(newBoards,loggedUser))
  }

  const onAdd = () => {
    if (boardTitle) dispatch(addBoard(boardTitle, bg, loggedUser));
    setAddMode(false);
    setBg("");
  };

  return (
    <section className="board-list flex gap ">

      <DragDropContext onDragEnd={handleDragEnd}>

        <Droppable droppableId="boards">

        {(provided) => (

          
          <>
          <span
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="list flex gap">

      {boards
        .sort((a, b) => b.isFavorite - a.isFavorite)
        .map((board, idx) => (
          <BoardPreview idx={idx} board={board} />
          ))}


          </span>
          <span>{provided.placeholder}</span>
          </>
         
          )}

          </Droppable>

          </DragDropContext>

      <div
        className="add-board"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        {!isAddMode ? (
          <span
            className="add-btn"
            onClick={() => {
              setAddMode(true);
            }}
          >
            +
          </span>
        ) : (
          <AddBoard
            onAdd={onAdd}
            setBoardTitle={setBoardTitle}
            boardTitle={boardTitle}
            setBg={setBg}
            setAddMode={setAddMode}
          />
        )}
      </div>
    </section>
  );
};
