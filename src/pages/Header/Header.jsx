import "./header.scss";
import imgper from "../../assets/person-vec.png";

import InstagramIcon from "@mui/icons-material/Instagram";
import { GitHub, Twitter, WhatsApp } from "@mui/icons-material";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <section >
      <div className="header">
        <div className="img">
          <img src={imgper} alt="my vector" />
        </div>
        <div className="name">
          <h1>Soroush Safarkhah</h1>
        </div>
        <div className="desc">
          <p>
            I'm a <span>React Web Developer</span>{" "}
          </p>
        </div>

        <ul className="social-icons">
          <li className="list-inline-item">
            <a href="/">
              <InstagramIcon fontSize="large" />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="/">
              <GitHub fontSize="large" />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="/">
              <Twitter fontSize="large" />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="/">
              <WhatsApp fontSize="large" />
            </a>
          </li>
        </ul>
        <Link to="/contact" className="contact-button">
          <div>
            <span className="bg switch__bg"></span>
            <span className="base switch__border-color"></span>
            <span className="text">Contact me</span>
          </div>
        </Link>
      </div>
    </section>
  );
};
