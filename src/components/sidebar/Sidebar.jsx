import "./sidebar.scss";
import logo from "../../assets/LOGOw.png";
import React, { useReducer } from "react";
import { reducer } from "../../Hooks/useReducer";
import { Link, NavLink } from "react-router-dom";
import { BsList,BsX } from "react-icons/bs";
import {
  BsGrid,
  BsPersonCheck,
  BsLayers,
  BsChat,
  BsAward,
} from "react-icons/bs";
const defaultOptions = {
  showAside1: false,
  openCloseNav1: false,
};


export const Sidebar = React.memo(() => {
  const [state, dispatch] = useReducer(reducer, defaultOptions);

  return (
    <div className="sidebar">
      <BsList
        onClick={() => dispatch({ type: "OPEN_NAVBAR" })}
        className="menu-icon switch__color"
      />
      <aside
        className={`${state.openCloseNav1 ? "aside open-sidebar" : "aside"} ${
          state.showAside1 ? "aside show-asideBar" : "aside"
        }`}
      >
        <div className="aside-wrapper">
          <BsX
            onClick={() => dispatch({ type: "CLOSE_NAVBAR" })}
            className="close-btn"
          />
          <div className="logo">
            <Link to="/home">
              <img src={logo} alt="" />
            </Link>
          </div>
          <nav className="links">
             <NavLink to="/home" onClick={() => dispatch({ type: "CLOSE_NAVBAR" })}><i><BsGrid/></i>Home</NavLink>
             <NavLink to="/about" onClick={() => dispatch({ type: "CLOSE_NAVBAR" })}><i><BsPersonCheck/></i>About</NavLink>
             <NavLink to="/resume" onClick={() => dispatch({ type: "CLOSE_NAVBAR" })}><i><BsAward/></i>Resume</NavLink>
             <NavLink to="/works" onClick={() => dispatch({ type: "CLOSE_NAVBAR" })}><i><BsLayers/></i>Works</NavLink>
             <NavLink to="/contact" onClick={() => dispatch({ type: "CLOSE_NAVBAR" })}><i><BsChat/></i>Contact</NavLink>
          </nav>
          <div className="footer">
            <span>© 2022 Soroush Safarkhah</span>
          </div>
        </div>
      </aside>
    </div>
  );
});
