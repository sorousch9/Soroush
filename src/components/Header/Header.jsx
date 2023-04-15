import "./header.scss";
import imgper from "../../assets/person-vec.png";
import {
  BsInstagram,
  BsGithub,
  BsWhatsapp,
  BsTwitter,
  BsFillCaretDownFill,
  BsLinkedin
} from "react-icons/bs";
import { Container } from "react-bootstrap";
import Typed from "react-typed";


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
          <h1>Hi, I'm Soroush Safarkhah</h1>
        </div>
        <div className="desc">
          <p>
            I'm a  <Typed
                strings={[
                    'Front-End developer',
                    'React developer',
                    'Photography lover']}
                    typeSpeed={100}
                    backSpeed={20}
                    loop >
                    <span type="text"/>
                </Typed>
          </p>
        </div>

        <ul className="social-icons">
          <li className="list-inline-item">
            <a href="https://www.instagram.com/soroush_raw"   target="_blank"
            rel="noreferrer">
              <BsInstagram />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://github.com/sorousch9"   target="_blank"
            rel="noreferrer">
              <BsGithub />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://twitter.com/soroush_raw"   target="_blank"
            rel="noreferrer">
              <BsTwitter />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://wa.me/4917655760250"   target="_blank"
            rel="noreferrer">
              <BsWhatsapp />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.linkedin.com/in/soroush9/"   target="_blank"
            rel="noreferrer">
              <BsLinkedin />
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
