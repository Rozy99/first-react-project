import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Sidebar.module.css";
import FriendList from "./friendList/FriendList";

const Sidebar = (props) => {
  let friendList = props.sidebar.friends.map((f) => (
    <FriendList name={f.name} />
  ));

  return (
    <div>
      <nav className={s.sidebar}>
        <ul>
          <li>
            <NavLink
              to="/profile"
              className={s.item}
              activeClassName={s.activeLink}
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dialogs"
              className={s.item}
              activeClassName={s.activeLink}
            >
              Dialogs
            </NavLink>
          </li>
          <li>
            <NavLink to="/news" className={s.item}>
              News
            </NavLink>
          </li>
          <li>
            <NavLink to="/music" className={s.item}>
              Music
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className={s.friends}>{friendList}</div>
    </div>
  );
};

export default Sidebar;
