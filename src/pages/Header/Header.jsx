import "./header.scss";
import imgper from "../../assets/person-vec.png";
import {
  BsInstagram,
  BsGithub,
  BsWhatsapp,
  BsTwitter,
  BsFillCaretDownFill,
} from "react-icons/bs";
import { Container } from "react-bootstrap";

export const Header = () => {
  return (
    <div className="section-header" >
    <section className="sec" id="home" name="home">
      <Container fluid="xl">
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
            <a href="/"   target="_blank"
            rel="noreferrer">
              <BsInstagram />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="/"   target="_blank"
            rel="noreferrer">
              <BsGithub />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="/"   target="_blank"
            rel="noreferrer">
              <BsTwitter />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="/"   target="_blank"
            rel="noreferrer">
              <BsWhatsapp />
            </a>
          </li>
        </ul>
        <a href="#contact" className="contact-button">
          <div>
            <span className="bg "></span>
            <span className="base "></span>
            <span className="text">Contact me</span>
          </div>
        </a>
        <a href="#about" className="scroll" >
            <BsFillCaretDownFill className="scroll-down" />
          </a>
      </div></Container>
    </section></div>
  );
};
