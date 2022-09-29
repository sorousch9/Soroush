import React from "react";
import "./about.scss";
import { Link } from "react-router-dom";
import profile from "../../assets/person-vec.png";
import { Col, Container, Row } from "react-bootstrap";
import Circle from "react-circle";

export const About = () => {
  return (
    <section className="sec" name="about">
      <Container fluid="xl">
        <div className="sec-title">
          <span className="section-title-op">ABOUT</span>
          <h2 className="section-title">About Me</h2>
        </div>
        <div className="about-me-container">
          <Col className="img-sec" md={3}>
            <div className="box-img">
              <img src={profile} alt="Soroush Safarkhah" />
            </div>
            <div className="gaper-img"> </div>
          </Col>
          <Row className="box-info" md={9}>
            <Col className="info" md={6}>
              <p>
                I'm Soroush Safarkhah, Web and React developer from Karaj, Iran,
                living in Germany. I have rich experience in designing and
                creating websites and Customization with React and
                Bootstrap,besides I have good knowledge of backend and good at
                Wordpress too.
              </p>

              <Link to="/#" className="download-button">
                <div>
                  <span className="bg "></span>
                  <span className="base "></span>
                  <span className="text">Download CV</span>
                </div>
              </Link>

              <div className="gaper-img"></div>
            </Col>
            <Col className="info" md={6}>
              <div className="progress-wrapper">
                <div className="skill-item">
                  <div className="skill-info">
                    <h4 className="text-infos">UI/Ux Design</h4>
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
                    <h4 className="text-infos">App Development</h4>
                    <span className="pro">75%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-Fourth "></div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="gaper-skill"></div>
        <div className="skills-about">
          <Row>
            <Col className="" md={3} sm={6} xs={6}>
              <div className="details">
                <Circle
                  progress={90}
                  animationDuration="3s linear forwards"
                  size="100"
                  lineWidth="40"
                  progressColor="var(--color-3)"
                  roundedStroke={true}
                />
                <p className="circle-info">React Js</p>
              </div>
            </Col>
            <Col className="" md={3} sm={6} xs={6}>
              <div className="details">
                <Circle
                  progress={80}
                  animationDuration="3s linear forwards"
                  size="100"
                  lineWidth="40"
                  progressColor="var(--color-3)"
                  roundedStroke={true}
                />
                <p className="circle-info">Node Js </p>
              </div>
            </Col>
            <Col className="" md={3} sm={6} xs={6}>
              <div className="details">
                <Circle
                  progress={85}
                  animationDuration="3s linear forwards"
                  size="100"
                  lineWidth="40"
                  progressColor="var(--color-3)"
                  roundedStroke={true}
                />
                <p className="circle-info">Javascript</p>
              </div>
            </Col>
            <Col className="" md={3} sm={6} xs={6}>
              <div className="details">
                <Circle
                  progress={75}
                  animationDuration="3s linear forwards"
                  size="100"
                  lineWidth="40"
                  progressColor="var(--color-3)"
                  roundedStroke={true}
                />
                <p className="circle-info">Figma </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};
