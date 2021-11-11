import { useState } from "react";
import { useSelector } from "react-redux";
import { Avatar, Menu, MenuItem } from "@mui/material";
import GroupIcon from '@mui/icons-material/Group';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import { useDispatch } from "react-redux";
import { toggleBoardMember } from "../store/actions/board.actions";

export const TrelluMembersMenu = () => {

  const [anchorEl, setAnchor] = useState(null);
    const users = useSelector(state => state.userModule.users)
    const board = useSelector(state => state.boardModule.board)
    const loggedUser = useSelector(state => state.userModule.loggedUser)
    const dispatch = useDispatch()

  const handleClose = () => {
    setAnchor(null);
  };

  const handleClick = (ev) => {
    setAnchor(ev.currentTarget);
  };

  const onToggleMember = (user) => {
    dispatch(toggleBoardMember(board._id,user,loggedUser))
  }

  const exist = (user) => {
      const idx = board?.members.findIndex(curr => curr._id === user._id)
      if (idx === -1) return false
      else return true
  }

  return (
    <>
     <span className="icon" onClick={handleClick}><GroupIcon/></span>
      <Menu
        id="group-menu"
        anchorEl={anchorEl}
        // keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
       
      >
        <span className="menu-title flex center-center">Trellu members</span>
          {
              users?.map(user => {
                  return <MenuItem
                  style={{
                      display:'flex',
                      gap:'10px'
                  }}
                  onClick={handleClose}
                  >
                      
                          <Avatar
                          src={user.imgUrl}
                          />
                        <span>
                            {
                                user.fullname
                            }
                        </span>
                          
                          <span>
                              {
                                  exist(user)? 

                                  <CheckIcon
                                  onClick={(ev) => {
                                      ev.stopPropagation()
                                      onToggleMember(user)
                                  }}
                                  /> :
                                  <AddIcon
                                  onClick={(ev) => {
                                    ev.stopPropagation()
                                    onToggleMember(user)
                                }}
                                  />
                              }
                          </span>
                      
                  </MenuItem>
              })
          }

      </Menu>
    </>
  );
};
