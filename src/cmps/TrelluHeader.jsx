import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"

import { useDispatch } from "react-redux"

import { logout } from "../store/actions/user.actions"


export const TrelluHeader = () => {

    const dispatch = useDispatch()

    const loggedUser = useSelector(state => state.userModule.loggedUser)

    return <section className="trellu-header flex">

          <div className="links grow flex center-center gap">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/workspace">Boards</NavLink>
        </div>

        <div className="logo grow flex center-center ">
                <h1>Trellu</h1>
        </div>


        <div className="options grow flex center-center gap">
{
    loggedUser? 
    
    <>
        <button>+</button>
        <button>Notifications</button>
        <button>Avatar</button>
        <button onClick={()=>{dispatch(logout())}}>Logout</button>
    </> :
            <NavLink to="/login">Login</NavLink>


}
        </div>

    </section>
}