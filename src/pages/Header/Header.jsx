import "./header.scss";
import imgper from "../../assets/person-vec.png";

import {
  BsInstagram,
  BsGithub,
  BsWhatsapp,
  BsTwitter,
  BsFillCaretDownFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <section>
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
              <BsInstagram />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="/">
              <BsGithub />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="/">
              <BsTwitter />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="/">
              <BsWhatsapp />
            </a>
          </li>
        </ul>
        <Link to="/contact" className="contact-button">
          <div>
            <span className="bg "></span>
            <span className="base "></span>
            <span className="text">Contact me</span>
          </div>
          
        </Link>
        <Link to="/contact" className="scroll" >
            <BsFillCaretDownFill className="scroll-down" />
          </Link>
      </div>
    </section>
  );
};
