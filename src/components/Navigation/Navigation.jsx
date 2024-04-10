import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink className={s.link} to="/">
            Home
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={s.link} to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
