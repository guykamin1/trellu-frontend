import { BoardPreview } from "./BoardPreview";
import { useState } from "react";
import { AddBoard } from "./AddBoard";
import { useDispatch } from "react-redux";
import { addBoard } from "../store/actions/board.actions";
import { useSelector } from "react-redux";

export const BoardList = ({ boards }) => {
  const [isAddMode, setAddMode] = useState(false);

  const [bg, setBg] = useState("");

  const dispatch = useDispatch();

  const loggedUser = useSelector((state) => state.userModule.loggedUser);

  const [boardTitle, setBoardTitle] = useState("");

  const onAdd = () => {
      if (boardTitle)
       dispatch(addBoard(boardTitle, bg, loggedUser));
       setAddMode(false)
       setBg('')
  };

  return (
    <section className="board-list flex gap wrap">
      {boards.sort((a,b) => b.isFavorite - a.isFavorite).map((board) => (
        <BoardPreview board={board} key={board._id} />
      ))}

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
              if (loggedUser)
              setAddMode(true);
              else alert('Logged in first!')
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
