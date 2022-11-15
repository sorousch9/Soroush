import { Col, Container, Row } from "react-bootstrap";
import "./works.scss";
import { BsBootstrap } from "react-icons/bs";
import {
  SiNodemon,
  SiJsonwebtokens,
  SiExpress,
  SiRedux,
  SiReact,
  SiReactrouter,
  SiStyledcomponents,
  SiMailchimp,
  SiMinutemailer,
  SiSwiper
} from "react-icons/si";

import { DiMongodb } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaSass } from "react-icons/fa";
import p1 from "../../assets/1.png";
import p2 from "../../assets/2.png";
import p3 from "../../assets/3.png";
import ScrollAnimation from "react-animate-on-scroll";

export const Works = () => {
  return (
    <div className="section-works">
      <section id="works" name="works" className="sec">
        <div className="works-sec-title">
          <span className="section-title-op">WORKS</span>
          <ScrollAnimation animateIn="swing" duration={1.5}>
            <h2 className="section-title">My Amazing Works</h2>
          </ScrollAnimation>
        </div>
        <Container fluid="xl">
          <ScrollAnimation
            animateIn="fadeInLeft"
            animateOut="zoomOut"
            duration={1.5}
          >
            <Row className="works-wrapper">
              <Col md={4}>
                <a
                  href="https://github.com/sorousch9/shi-beauty"
                  rel="noreferrer"
                  target="_blank"
                  className="works-info"
                >
                  <h3>Shi beauty</h3>
                  <h6>React Store Web-App</h6>
                  <div className="dependencies-ico">
                    <i>
                      React
                      <span>
                        <SiReact />
                      </span>
                    </i>
                    <i>
                      Redux
                      <span>
                        <SiRedux />
                      </span>
                    </i>
                    <i>
                      JavaScript
                      <span>
                        <IoLogoJavascript />
                      </span>
                    </i>
                    <i>
                      React Router
                      <span>
                        <SiReactrouter />
                      </span>
                    </i>
                    <i>
                      Bootstrap
                      <span>
                        <BsBootstrap />
                      </span>
                    </i>
                    <i>
                      Styled Component
                      <span>
                        <SiStyledcomponents />
                      </span>
                    </i>
                    <i>
                      Express
                      <span>
                        <SiExpress />
                      </span>
                    </i>
                    <i>
                      Web Tokens
                      <span>
                        <SiJsonwebtokens />
                      </span>
                    </i>
                    <i>
                      Mongo DB
                      <span>
                        <DiMongodb />
                      </span>
                    </i>
                    <i>
                      Nodemon
                      <span>
                        <SiNodemon />
                      </span>
                    </i>
                    <i>
                      Mailgun
                      <span>
                        <SiMinutemailer />
                      </span>
                    </i>
                  </div>
                </a>
              </Col>
              <Col md={8}>
                <div className="works-img">
                  <img src={p1} alt="product1" className="img-project" />
                </div>
              </Col>
            </Row>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInRight"
            animateOut="zoomOut"
            duration={1.5}
          >
            <Row className="works-wrapper">
              <Col md={8}>
                <div className="works-img">
                  <img src={p2} alt="product1" className="img-project" />
                </div>
              </Col>
              <Col md={4}>
                <a
                  href="https://raw1.netlify.app"
                  rel="noreferrer"
                  target="_blank"
                  className="works-info"
                >
                  <h3>James webb</h3>
                  <h6>React Portfolio Web-App</h6>
                  <div className="dependencies-ico">
                    <i>
                      React
                      <span>
                        <SiReact />
                      </span>
                    </i>
                    <i>
                      JavaScript
                      <span>
                        <IoLogoJavascript />
                      </span>
                    </i>
                    <i>
                      React Router
                      <span>
                        <SiReactrouter />
                      </span>
                    </i>
                    <i>
                      Bootstrap
                      <span>
                        <BsBootstrap />
                      </span>
                    </i>

                    <i>
                      Redux
                      <span>
                        <SiRedux />
                      </span>
                    </i>
                  </div>
                </a>
              </Col>
            </Row>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInLeft"
            animateOut="zoomOut"
            duration={1.5}
          >
            <Row className="works-wrapper">
              <Col md={4}>
                <a
                  className="works-info"
                  href="https://github.com/sorousch9/Bueromarkt"
                  rel="noreferrer"
                  target="_blank"
                >
                  <h3>Bötcher AG store</h3>
                  <h6>React Store Web-App</h6>
                  <div className="dependencies-ico">
                    <i>
                      React
                      <span>
                        <SiReact />
                      </span>
                    </i>
                    <i>
                      JavaScript
                      <span>
                        <IoLogoJavascript />
                      </span>
                    </i>
                    <i>
                      Sass
                      <span>
                        <FaSass />
                      </span>
                    </i>
                    <i>
                      React Router
                      <span>
                        <SiReactrouter />
                      </span>
                    </i>
                    <i>
                      Swiper
                      <span>
                        <SiSwiper />
                      </span>
                    </i>
                    <i>
                      Bootstrap
                      <span>
                        <BsBootstrap />
                      </span>
                    </i>
                    <i>
                      Mailchimp
                      <span>
                        <SiMailchimp />
                      </span>
                    </i>
                    <i>
                      Express
                      <span>
                        <SiExpress />
                      </span>
                    </i>
            
                    <i>
                      Mongo DB
                      <span>
                        <DiMongodb />
                      </span>
                    </i>
                    <i>
                      Nodemon
                      <span>
                        <SiNodemon />
                      </span>
                    </i>
                  </div>
                </a>
              </Col>
              <Col md={8}>
                <div className="works-img">
                  <img src={p3} alt="" className="Bötcher AG store" />
                </div>
              </Col>
            </Row>
          </ScrollAnimation>
        </Container>
      </section>
    </div>
  );
};
