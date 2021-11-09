import { NavLink } from "react-router-dom";

import { useState, useEffect } from "react";

import { useHistory } from "react-router";

import { useDispatch, useSelector } from "react-redux";

import { login, signup } from "../store/actions/user.actions";

export const TrelluLogin = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [creds, setCreds] = useState({
    username: "",
    password: "",
    fullname: "",
  });

  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.userModule.loggedUser);

  const history = useHistory();

  useEffect(() => {
    if (loggedUser) history.push("/");
  }, [loggedUser]);

  const toggleLogin = () => {
    setIsLogin((isLogin) => !isLogin);
  };

  const handleChange = (ev) => {
    const updatedCreds = { ...creds };
    updatedCreds[ev.target.name] = ev.target.value;
    setCreds(updatedCreds);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (isLogin) {
      if (creds.username && creds.password) dispatch(login(creds));
    } else {
      if (creds.username && creds.password && creds.fullname)
        dispatch(signup(creds));
    }
  };

  return (
    <section className="trellu-login flex center-center">
      <div className="login-signup flex center-center column">
        {
          <div>
            {isLogin ? <h1>Login</h1> : <h1>Signup</h1>}
            <form onSubmit={handleSubmit} className="flex column gap">
              <input
                onChange={handleChange}
                value={creds.username}
                name="username"
                placeholder="Enter username"
                type="text"
              />
              <input
                onChange={handleChange}
                value={creds.password}
                name="password"
                placeholder="Enter password"
                type="text"
              />
              {!isLogin && (
                <input
                  onChange={handleChange}
                  value={creds.fullname}
                  name="fullname"
                  placeholder="Enter full name"
                  type="text"
                />
              )}
              <button className="switch-btn">
                {isLogin ? "Login" : "Signup"}
              </button>
            </form>
          </div>
        }

        {isLogin ? (
          <h4 onClick={toggleLogin}>Or signup...</h4>
        ) : (
          <h4 onClick={toggleLogin}>Or login...</h4>
        )}
      </div>
    </section>
  );
};
