import { useState } from "react";
import { useSelector } from "react-redux";
import { Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


export const GroupMenu = ({onRemove}) => {

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
