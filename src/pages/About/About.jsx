import React from "react";
import "./about.scss";
import { Link } from "react-router-dom";
import profile from "../../assets/person-vec.png";
import { Col, Container, Row } from "react-bootstrap";

export const About = () => {
  return (
    <section>
      <Container fluid>
        <div>
          <h2 className="section-title">About Me</h2>
        </div>
        <div className="gaper"></div>
        <Row className="row">
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
                    <h4 className="text-infos">Development</h4>
                    <span className="pro">85%</span>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "85%", background: " #ffc107" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="progress-wrapper">
                <div className="skill-item">
                  <div className="skill-info">
                    <h4 className="text-infos">UI/UX Design</h4>
                    <span className="pro">80%</span>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "80%", background: " #dc3545" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="progress-wrapper">
                <div className="skill-item">
                  <div className="skill-info">
                    <h4 className="text-infos">Photography</h4>
                    <span className="pro">75%</span>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "75%", background: " #0dcaf0" }}
                    ></div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </section>
  );
};
