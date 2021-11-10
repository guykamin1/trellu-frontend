import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { removeBoard } from "../store/actions/board.actions";

export const BoardMenu = ({titleRef}) => {

  const [anchorEl, setAnchor] = useState(null);
    const board = useSelector(state => state.boardModule.board)
    const dispatch = useDispatch()

  const handleClose = () => {
    setAnchor(null);
  };

  const handleClick = (ev) => {
    setAnchor(ev.currentTarget);
  };

  const onRemove = () => {
    dispatch(removeBoard(board))
  }

  return (
    <>
     <span className="icon" onClick={handleClick}><MoreHorizIcon/></span>
      <Menu
        id="group-menu"
        anchorEl={anchorEl}
        // keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
       
      >
        <span className="menu-title flex center-center">
          Board actions
        </span>
        <MenuItem
        onClick={() => {
            handleClose()
            setTimeout(() => {
                titleRef.current.focus()
            }, 0);
        }}
        >Rename</MenuItem>
        <MenuItem
        onClick={()=>{
          handleClose()
          onRemove()
        }}
        >Remove</MenuItem>
       
      </Menu>
    </>
  );
};
