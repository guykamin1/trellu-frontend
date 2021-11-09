import { NavLink } from "react-router-dom";

export const TrelluHome = () => {

  return (
    <section className="trellu-home flex">
      <div className="info flex column center-center">
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          atque delectus ut, eligendi, ipsum fugiat aliquam, natus quibusdam
          reiciendis molestiae cupiditate ullam consequuntur illum ipsa
          voluptatibus nesciunt aliquid quo mollitia.
        </span>
        <h1>
          {" "}
          <NavLink to="/workspace">To Demo</NavLink>{" "}
        </h1>
      </div>

      <div className="picture flex center-center">
        <h1>Picture</h1>
      </div>
    </section>
  );
};
