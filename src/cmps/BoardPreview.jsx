import { useHistory } from "react-router";

import { useDispatch, useSelector } from "react-redux";

import { removeBoard } from "../store/actions/board.actions";

export const BoardPreview = ({ board }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.userModule.loggedUser);

  const onRemove = (ev) => {
    ev.stopPropagation();
    if (loggedUser) dispatch(removeBoard(board));
    else alert("Logged in first!");
  };

  return (
    <section
      onClick={() => {
        history.push(`/board/${board._id}`);
      }}
      className="board-preview"
      style={{
        backgroundImage: `url(${board.style.bgImg})`,
      }}
    >
      {<span>{board.title}</span>}

      <button onClick={onRemove}>X</button>
    </section>
  );
};
