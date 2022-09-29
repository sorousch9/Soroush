import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { HiBriefcase } from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa";
import "./resume.scss";
import { skillico } from "../../data";


export const Resume = () => {
  return (
    <section className="sec">
      <Container fluid="xl">
        <div className="sec-title">
          <span className="section-title-op">RESUME</span>
          <h2 className="section-title">Resume</h2>
        </div>

        <Row>
          <Col md={6}>
            <div>
              <h4 className="small-title">
                <HiBriefcase
                  style={{ fontSize: "40px", marginRight: "10px" }}
                />
                Working Experience
              </h4>
            </div>
            <div className="resume-wrapper">
              <div className="resume">
                <div className="resume-summary">
                  <h6 className="resume-year"> 05/2017 – 05/2019</h6>
                </div>
                <div className="resume-details">
                  <h5> Frontend Web Developer and SEO Manager</h5>
                  <h6> Branco.ir</h6>
                  <p>
                    Web-Content- und SEO-Manager<br></br>
                    Kitchen Appliances Store
                  </p>
                </div>
              </div>
              <div className="resume">
                <div className="resume-summary">
                  <h6 className="resume-year"> 05/2016 – 07/2017</h6>
                </div>
                <div className="resume-details">
                  <h5> Frontend Web Developer</h5>
                  <h6> CAN.ir</h6>
                  <p>
                    Web Developer WordPress Manufacturer kitchen store for home
                    appliances
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div>
              <h4 className="small-title">
                <FaGraduationCap
                  style={{ fontSize: "40px", marginRight: "10px" }}
                />{" "}
                Educational Qualification
              </h4>
            </div>
            <div className="resume-wrapper">
              <div className="resume">
                <div className="resume-summary">
                  <h6 className="resume-year"> 10/2012 – 05/2014</h6>
                </div>
                <div className="resume-details">
                  <h5> Technical Computer Science</h5>
                  <h6> University of Shamsipur | Iran </h6>
                  <p>four semesters</p>
                </div>
              </div>
              <div className="resume">
                <div className="resume-summary">
                  <h6 className="resume-year"> 09/2009 – 07/2012</h6>
                </div>
                <div className="resume-details">
                  <h5>Financial Accounting </h5>
                  <h6> University of Shamsipur | Iran </h6>
                  <p>Degree: Bachelor of Arts high school diploma</p>
                </div>
              </div>
              <div className="resume">
                <div className="resume-summary">
                  <h6 className="resume-year"> 09/2006 – 07/2009</h6>
                </div>
                <div className="resume-details">
                  <h5> secondary education II </h5>
                  <h6> Shahid Chamran, Karaj | Iran </h6>
                  <p>Degree: High School</p>
                </div>
              </div>
            </div>
          </Col>
          <div className="about-skill">
          
              {skillico.map((item, index) => (
                <Col bottom="true" key={index + item} md={2} sm={3} xs={3}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="skill-container"
                  >
                    {item.icon}
                    <span>{item.spanText}</span>
                  </a>
                </Col>
              ))}
              
          </div>
        </Row>
      </Container>
    </section>
  );
};
