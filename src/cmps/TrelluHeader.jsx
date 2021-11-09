import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';

import { logout } from "../store/actions/user.actions";

export const TrelluHeader = () => {
  const dispatch = useDispatch();

  const loggedUser = useSelector((state) => state.userModule.loggedUser);

  return (
    <section className="trellu-header flex">
      <div className="links grow flex center-center gap">
        <NavLink to="/">
          <HomeIcon
          style={{
            color:'black'
          }}
          />
        </NavLink>
        <NavLink to="/workspace">
          <DashboardIcon
          style={{
            color:'black'
          }}
          />
        </NavLink>
      </div>

      <div className="logo grow flex center-center ">
        <h1>Trellu</h1>
      </div>

     

      <div className="options grow flex center-center gap">
        {loggedUser ? (
          <>
            <button>
              <NotificationsIcon/>
            </button>
            <button>
              <PersonIcon/>
            </button>
            <button
              onClick={() => {
                dispatch(logout());
              }}
            >
              <LogoutIcon/>
            </button>
          </>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </section>
  );
};
