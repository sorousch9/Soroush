import "./sidebar.scss";
import logo from "../../assets/LOGOw.png";
import React, { useReducer } from "react";
import { reducer } from "../../Hooks/useReducer";
import { Link } from "react-router-dom";
import { BsList, BsX } from "react-icons/bs";
import {
  BsGrid,
  BsPersonCheck,
  BsLayers,
  BsChat,
  BsAward,
} from "react-icons/bs";
import { Nav } from "react-bootstrap";
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
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <Nav defaultActiveKey="/" className="flex-column">
            <Nav.Link
              eventKey="link-1"
              className="navlink"
              href="#home"
              onClick={() => dispatch({ type: "CLOSE_NAVBAR" })}
            >
              <i>
                <BsGrid />
              </i>
              Home
            </Nav.Link>
            <Nav.Link
              
              eventKey="link-2"
              className="navlink"
              href="#about"
              onClick={() => dispatch({ type: "CLOSE_NAVBAR" })}
            >
              <i>
                <BsPersonCheck />
              </i>
              About
            </Nav.Link>
            <Nav.Link
              eventKey="link-3"
              className="navlink"
              href="#resume"
              onClick={() => dispatch({ type: "CLOSE_NAVBAR" })}
            >
              <i>
                <BsAward />
              </i>
              Resume
            </Nav.Link>
            <Nav.Link
              eventKey="link-4"
              className="navlink"
              href="#works"
              onClick={() => dispatch({ type: "CLOSE_NAVBAR" })}
            >
              <i>
                <BsLayers />
              </i>
              Works
            </Nav.Link>
            <Nav.Link
              eventKey="link-5"
              className="navlink"
              href="#contact"
              onClick={() => dispatch({ type: "CLOSE_NAVBAR" })}
            >
              <i>
                <BsChat />
              </i>
              Contact
            </Nav.Link>
          </Nav>
          <div className="footer">
            <span> © 2022 Soroush Safarkhah</span>
          </div>
        </div>
      </aside>
    </div>
  );
});
