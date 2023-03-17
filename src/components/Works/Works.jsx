import { Carousel, Col, Container, Image, Row } from "react-bootstrap";
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
  SiMinutemailer,
  SiSwiper,
  SiTypescript
} from "react-icons/si";

import { DiMongodb } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaSass } from "react-icons/fa";
import web1 from "../../assets/web1.webp";
import web2 from "../../assets/web2.webp";
import web3 from "../../assets/web3.webp";
import shibeauty1 from "../../assets/shibeauty1.webp";
import shibeauty2 from "../../assets/shibeauty2.webp";
import shibeauty3 from "../../assets/shibeauty3.webp";
import susu1 from "../../assets/susu1.webp";
import susu2 from "../../assets/susu2.webp";
import susu3 from "../../assets/susu3.webp";
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
                  rel="noreferrer"
                  className="works-info"
                  href="https://github.com/sorousch9/Bueromarkt"
                  target="_blank"
                >
                  <h3>Susu Shop</h3>
                  <h6>My React project is built using Typescript and utilizes popular dependencies such as Bootstrap for UI components, React-Redux for state management, and React-Router-DOM for routing.</h6>
                  <div className="dependencies-ico">
                    <i>
                      TypeScript
                      <span>
                        <SiTypescript />
                      </span>
                    </i>
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
                      Mongo DB
                      <span>
                        <DiMongodb />
                      </span>
                    </i>
                  </div>
                </a>
              </Col>
              <Col md={8}>
                <Carousel variant="dark" indicators={false}>
                  <Carousel.Item>
                    <Image rounded
                      className="d-block w-100"
                      src={susu1}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h4 >First slide label</h4>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item >
                    <Image rounded
                      className="d-block w-100"
                      src={susu2}
                      alt="Second slide"
                    />
                    <Carousel.Caption>
                      <h4>Second slide label</h4>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image rounded
                      className="d-block w-100"
                      src={susu3}
                      alt="Third slide"
                    />
                    <Carousel.Caption>
                      <h4>Third slide label</h4>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
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
                  rel="noreferrer"
                  href="https://github.com/sorousch9/shi-beauty"
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
              <Carousel variant="dark" indicators={false}>
                  <Carousel.Item>
                    <Image rounded
                      className="d-block w-100"
                      src={shibeauty1}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h4 >First slide label</h4>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item >
                    <Image rounded
                      className="d-block w-100"
                      src={shibeauty2}
                      alt="Second slide"
                    />
                    <Carousel.Caption>
                      <h4>Second slide label</h4>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image rounded
                      className="d-block w-100"
                      src={shibeauty3}
                      alt="Third slide"
                    />
                    <Carousel.Caption>
                      <h4>Third slide label</h4>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </Col>
            </Row>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInRight"
            animateOut="zoomOut"
            duration={1.5}
          >
            <Row className="works-wrapper">
              <Col md={4}>
                <a
                  href="https://raw1.netlify.app"
                  target="_blank"
                  rel="noreferrer"
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
              <Col md={8}>
              <Carousel variant="dark" indicators={false}>
                  <Carousel.Item>
                    <Image rounded
                      className="d-block w-100"
                      src={web1}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h4 >First slide label</h4>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item >
                    <Image rounded
                      className="d-block w-100"
                      src={web2}
                      alt="Second slide"
                    />
                    <Carousel.Caption>
                      <h4>Second slide label</h4>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image rounded
                      className="d-block w-100"
                      src={web3}
                      alt="Third slide"
                    />
                    <Carousel.Caption>
                      <h4>Third slide label</h4>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </Col>

            </Row>
          </ScrollAnimation>

        </Container>
      </section>
    </div>
  );
};
