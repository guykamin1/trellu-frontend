import { useHistory } from "react-router";

import { useDispatch, useSelector } from "react-redux";

import { removeBoard, toggleFavorite } from "../store/actions/board.actions";

import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

import StarsIcon from "@mui/icons-material/Stars";

export const BoardPreview = ({ board }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.userModule.loggedUser);
  const onRemove = (ev) => {
    ev.stopPropagation();
    if (loggedUser) dispatch(removeBoard(board));
    else alert("Logged in first!");
  };

  const onFavorite = (ev) => {
    ev.stopPropagation()
    dispatch(toggleFavorite(board._id,true))
  }

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
      {<span className="title">{board.title}</span>}
      <span>
        <button className="favorite">
          <StarsIcon
            onClick={onFavorite}
            style={{
              color: `${board?.isFavorite ? "yellow" : "black"}`,
            }}
          />
        </button>
        <button className="remove" onClick={onRemove}>
          <RemoveCircleIcon
            style={{
              color: "black",
            }}
          />
        </button>
      </span>
    </section>
  );
};
