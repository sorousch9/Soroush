import React from "react";
import "./about.scss";
import profile from "../../assets/person-vec.png";
import { Col, Container, Row } from "react-bootstrap";
import Circle from "react-circle";
import ScrollAnimation from "react-animate-on-scroll";
import cv from "../../assets/cv.pdf"

export const About = () => {
  return (
    <div className="section-about">
      <section className="sec" name="about" id="about">
        <div className="sec-title">
          <span className="section-title-op">ABOUT</span>
          <ScrollAnimation animateIn="fadeInRight" duration={4}>
            <h2 className="section-title">About Me</h2>
          </ScrollAnimation>
        </div>

        <Container fluid="xl">
          <ScrollAnimation animateIn="fadeIn">
            <div className="about-me-container">
              <Row className="img-sec">
                <div className="box-img">
                  <img src={profile} alt="Soroush Safarkhah" />
                </div>
                <div className="gaper-img"> </div>
              </Row>
              <Row className="box-info">
                <Col className="info" md={6}>
                  <p>
                    I'm Soroush Safarkhah, Web and React developer from Karaj,
                    Iran, living in Germany. I have rich experience in designing
                    and creating websites and Customization with React and
                    Bootstrap,besides I have good knowledge of backend and good
                    at Wordpress too.
                  </p>

                  <a href={cv}  target={"_blank"} rel="noreferrer" className="download-button">
                    <div>
                      <span className="bg "></span>
                      <span className="base "></span>
                      <span className="text">Download CV</span>
                    </div>
                  </a>

                  <div className="gaper-img"></div>
                </Col>
                <Col className="info" md={6}>
                  <div className="progress-wrapper">
                    <div className="skill-item">
                      <div className="skill-info">
                        <h4 className="text-infos">UI/UX Design</h4>
                        <span className="pro">85%</span>
                      </div>
                      <div className="progress-bar">
                        <div className="progress-first "></div>
                      </div>
                    </div>
                  </div>
                  <div className="progress-wrapper">
                    <div className="skill-item">
                      <div className="skill-info">
                        <h4 className="text-infos">Back-end Development</h4>
                        <span className="pro">70%</span>
                      </div>
                      <div className="progress-bar">
                        <div className="progress-sec"></div>
                      </div>
                    </div>
                  </div>
                  <div className="progress-wrapper">
                    <div className="skill-item">
                      <div className="skill-info">
                        <h4 className="text-infos">Front-end Development</h4>
                        <span className="pro">85%</span>
                      </div>
                      <div className="progress-bar">
                        <div className="progress-third"></div>
                      </div>
                    </div>
                  </div>
                  <div className="progress-wrapper">
                    <div className="skill-item">
                      <div className="skill-info">
                        <h4 className="text-infos">Wordpress</h4>
                        <span className="pro">90%</span>
                      </div>
                      <div className="progress-bar">
                        <div className="progress-Fourth "></div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </ScrollAnimation>
          <div className="gaper-skill"></div>
          <ScrollAnimation animateIn="headShake" duration={4}>
            <div className="skills-about">
              <Row>
                <Col className="" md={3} sm={6} xs={6}>
                  <div className="details">
                    <Circle
                      progress={90}
                      animate={true}
                      animationDuration="2s"
                      bgColor="#6d6d6d"
                      size="100"
                      lineWidth="20"
                      textColor="#8d8d8d"
                      progressColor="var(--color-progress-4)"
                      roundedStroke={true}
                      textStyle={{
                        font: "300 5rem Rubik",
                      }}
                      percentSpacing={1}
                    />
                    <p className="circle-info">React Js </p>
                  </div>
                </Col>
                <Col className="" md={3} sm={6} xs={6}>
                  <div className="details">
                    <Circle
                      progress={80}
                      animate={true}
                      animationDuration="2s"
                      bgColor="#6d6d6d"
                      size="100"
                      lineWidth="20"
                      textColor="#8d8d8d"
                      progressColor="var(--color-progress-4)"
                      roundedStroke={true}
                      textStyle={{
                        font: "300 5rem Rubik",
                      }}
                      percentSpacing={1}
                    />
                    <p className="circle-info">Node Js </p>
                  </div>
                </Col>
                <Col className="" md={3} sm={6} xs={6}>
                  <div className="details">
                    <Circle
                      progress={85}
                      animate={true}
                      animationDuration="2s"
                      bgColor="#6d6d6d"
                      size="100"
                      lineWidth="20"
                      textColor="#8d8d8d"
                      progressColor="var(--color-progress-4)"
                      roundedStroke={true}
                      textStyle={{
                        font: "300 5rem Rubik",
                      }}
                      percentSpacing={1}
                    />
                    <p className="circle-info">Javascript</p>
                  </div>
                </Col>
                <Col className="" md={3} sm={6} xs={6}>
                  <div className="details">
                    <Circle
                      progress={75}
                      animate={true}
                      animationDuration="2s"
                      bgColor="#6d6d6d"
                      size="100"
                      lineWidth="20"
                      textColor="#8d8d8d"
                      progressColor="var(--color-progress-4)"
                      roundedStroke={true}
                      textStyle={{
                        font: "300 5rem Rubik",
                      }}
                      percentSpacing={1}
                    />
                    <p className="circle-info">Figma </p>
                  </div>
                </Col>
              </Row>
            </div>
          </ScrollAnimation>
        </Container>
      </section>
    </div>
  );
};
