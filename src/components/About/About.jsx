import React from "react";
import "./about.scss";
import profile from "../../assets/person-vec.png";
import { Col, Container, Row } from "react-bootstrap";
import Circle from "react-circle";
import ScrollAnimation from "react-animate-on-scroll";

export const About = () => {
  return (
    <div className="section-about">
      <section className="sec" name="about" id="about">
        <div className="sec-title">
          <span className="section-title-op">ABOUT</span>
          <ScrollAnimation animateIn="swing" duration={1.5}>
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
                    I am a Javascript and React developer with a focus on Typescript. My expertise lies in utilizing Material UI and Bootstrap to create sleek and modern user interfaces. I am also proficient in using React Router DOM to create smooth and seamless user experiences.
                    My passion for coding started at a young age, and I have since dedicated myself to becoming a skilled and innovative developer. I am constantly pushing the boundaries of what is possible with my skills, and I love taking on challenging projects that allow me to grow and expand my knowledge.
                    When I am not coding, I enjoy VideoGaming, reading, and spending time with my family.
                  </p >
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
                        <span className="pro">100%</span>
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
                      progress={100}
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
                      progress={99}
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
                    <p className="circle-info">TypeScript </p>
                  </div>
                </Col>
                <Col className="" md={3} sm={6} xs={6}>
                  <div className="details">
                    <Circle
                      progress={95}
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
