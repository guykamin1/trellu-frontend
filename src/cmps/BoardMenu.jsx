import { useState } from "react";
import { useSelector } from "react-redux";
import { Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


export const BoardMenu = ({titleRef}) => {

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
     <span className="icon" onClick={handleClick}><MoreHorizIcon/></span>
      <Menu
        id="group-menu"
        anchorEl={anchorEl}
        // keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
       
      >
        <MenuItem
        onClick={() => {
            handleClose()
            setTimeout(() => {
                titleRef.current.focus()
            }, 0);
        }}
        >Rename</MenuItem>
      </Menu>
    </>
  );
};
