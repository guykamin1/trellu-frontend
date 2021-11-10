import { useState } from "react";
import { useSelector } from "react-redux";
import { Menu, MenuItem } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import {Avatar} from '@material-ui/core'


export const AvatarMenu = () => {

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
      <PersonIcon
        onClick={handleClick}
        style={{
          color: "black",
        }}
      />
      <Menu
        id="avatar-menu"
        anchorEl={anchorEl}
        // keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
        onClick={handleClose}
        style={{
            display:'flex',
            gap:'5px'
        }}
        >
         <Avatar
         src={loggedUser.imgUrl}
         >
             {
                 loggedUser.fullname.charAt(0)
             }
         </Avatar>
        <span>
            {
                loggedUser.fullname
            }
        </span>
        </MenuItem>
      </Menu>
    </>
  );
};
