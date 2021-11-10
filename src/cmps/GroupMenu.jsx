import { useState } from "react";
import { useSelector } from "react-redux";
import { Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


export const GroupMenu = ({onRemove,titleRef}) => {

  const [anchorEl, setAnchor] = useState(null);
    const loggedUser = useSelector(state => state.userModule.loggedUser)

  const handleClose = () => {
    setAnchor(null);
  };

  const handleClick = (ev) => {
    setAnchor(ev.currentTarget);
  };

  return (
    <>
     <span onClick={handleClick}><MoreHorizIcon/></span>
      <Menu
        id="group-menu"
        anchorEl={anchorEl}
        // keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
       
      >
        <span className="menu-title flex center-center">
          Group actions
        </span>
        <MenuItem
        onClick={()=>{
          handleClose()
          setTimeout(() => {
            titleRef.current.focus()
          }, 0);
        }}
        >Rename</MenuItem>
       <MenuItem onClick={
           () => {
            onRemove()
            handleClose()
           }
       }>Remove</MenuItem>
      </Menu>
    </>
  );
};
