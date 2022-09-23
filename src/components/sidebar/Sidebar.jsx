import { Close, MenuOpen } from "@mui/icons-material";
import "./sidebar.scss";
import logo from "../../assets/LOGOw.png";
import React, { useReducer } from "react";
import { reducer } from "../../Hooks/useReducer";
import { Link, NavLink } from "react-router-dom";
import { sideBarMenu } from "../../data";

const defaultOptions = {
  showAside1: false,
  openCloseNav1: false,
};

export const Sidebar = React.memo(() => {
  const [state, dispatch] = useReducer(reducer, defaultOptions);

  return (
    <div className="sidebar">
      <MenuOpen
        onClick={() => dispatch({ type: "OPEN_NAVBAR" })}
        className="menu-icon switch__color"
      />
      <aside
        className={`${state.openCloseNav1 ? "aside open-sidebar" : "aside"} ${
          state.showAside1 ? "aside show-asideBar" : "aside"
        }`}
      >
        <div className="aside-wrapper">
          <Close
            onClick={() => dispatch({ type: "CLOSE_NAVBAR" })}
            className="close-btn"
          />
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>

          <ul className="links">
            {sideBarMenu.map((link, index) => {
              const { text, icon, url } = link;
              return (
                <li key={index}>
                  <NavLink
                    onClick={() => dispatch({ type: "CLOSE_NAVBAR" })}
                    className={({ isActive }) => {
                      return isActive
                        ? "nav__links active-links"
                        : "nav__links";
                    }}
                    to={url}
                  >
                    {icon}
                    {text}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <div className="footer">
            <span>© 2022 Soroush Safarkhah</span>
          </div>
        </div>
      </aside>
    </div>
  );
});
