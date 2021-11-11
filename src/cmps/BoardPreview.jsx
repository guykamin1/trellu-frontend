import { useHistory } from "react-router";

import { useDispatch, useSelector } from "react-redux";

import { removeBoard, toggleFavorite } from "../store/actions/board.actions";

import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

import StarsIcon from "@mui/icons-material/Stars";

import {Draggable} from 'react-beautiful-dnd'

export const BoardPreview = ({ board,idx }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const onRemove = (ev) => {
    ev.stopPropagation();
    dispatch(removeBoard(board));
  };

  const onFavorite = (ev) => {
    ev.stopPropagation()
    dispatch(toggleFavorite(board._id,true))
  }

  return (

    <Draggable index={idx} key={board._id} draggableId={board._id}>

       {(provided)=>(

       
        <span 
        className="board-preview-draggable"
        {...provided.draggableProps}
        ref={provided.innerRef}
        {...provided.dragHandleProps}
        
        >


        <section
        
        
        onClick={() => {
          history.push(`/board/${board._id}`);
        }}
        className="board-preview"
        
        style={{
          backgroundImage: `url(${board.style.bgImg})`
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

            </span>

)}
             </Draggable>


  );
};
