import { NavLink } from "react-router-dom";

export const TrelluHome = () => {

  return (
    <section className="trellu-home flex ">

      <div className="info flex column center-center gap">
        <span className="description">
        Trelleu helps teams move work forward.
        </span>
        <span className="demo">
          {" "}
          <NavLink to="/workspace">To Demo</NavLink>{" "}
        </span>
      </div>

      <div className="picture flex center-center">
        <h1>Picture</h1>
      </div>
    </section>
  );
};
