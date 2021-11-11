import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Menu, MenuItem } from "@mui/material";
import {MoreVert} from "@mui/icons-material/MoreVert";
import { removeBoard,removeTask } from "../store/actions/board.actions";
import MoreVertIcon from '@mui/icons-material/MoreVert';


export const TaskMenu = ({titleRef,groupId,taskId,openDialog}) => {

  const [anchorEl, setAnchor] = useState(null);
    const board = useSelector(state => state.boardModule.board)
    const loggedUser = useSelector(state => state.userModule.loggedUser)
    const dispatch = useDispatch()

  const handleClose = () => {
    setAnchor(null);
  };

  const handleClick = (ev) => {
    setAnchor(ev.currentTarget);
  };

  const onRemove = () => {
      dispatch(removeTask(board._id,groupId,taskId,loggedUser))
  }

  return (
    <>
     <span className="icon" onClick={handleClick}><MoreVertIcon/></span>
      <Menu
        id="group-menu"
        anchorEl={anchorEl}
        // keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
       
      >
        <span className="menu-title flex center-center">
          Task actions
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
        <MenuItem
        onClick={()=>{
          handleClose()
          openDialog()
        }}
        >
        Details
        </MenuItem>
       
      </Menu>
    </>
  );
};
