import { Container } from "react-bootstrap";
import "./works.scss";
import p1 from "../../assets/1.png";
import p2 from "../../assets/2.png";
import p3 from "../../assets/3.png";
import { BsBoxArrowInRight } from "react-icons/bs";
import ScrollAnimation from "react-animate-on-scroll";

export const Works = () => {
  return (
    <div className="section-works">
      <section id="works" name="works" className="sec">
        <div className="works-sec-title">
          <span className="section-title-op">WORKS</span>
          <ScrollAnimation animateIn="fadeInRight" duration={4}>
            <h2 className="section-title">My Amazing Works</h2>
          </ScrollAnimation>
        </div>
        <Container fluid="xl">
          <div className="works-list">
            <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutRight" duration={0.7}>
              <div className="works-items">
                <div className="works-item">
                  <img src={p1} alt="project1" className="project-img" />
                  <div className="works-content">
                    <div className="works-details">
                      <span className="works-category">
                        <a href="/">Shi Beauty</a>
                      </span>
                      <h3 className="works-title">
                        <span href="/">
                          Web App Store with<br></br> React and Redux
                        </span>
                      </h3>
                      <span className="works-view-project">
                        <a href="/">
                          View Project{" "}
                          <BsBoxArrowInRight style={{ fontSize: "24px" }} />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutLeft" duration={0.7}>
              <div className="works-items">
                <div className="works-item">
                  <img src={p2} alt="project1" className="project-img" />
                  <div className="works-content">
                    <div className="works-details">
                      <span className="works-category">
                        <a href="/">James Webb</a>
                      </span>
                      <h3 className="works-title">
                        <span href="/">
                          Web Portfolio <br></br> james webb telescope
                        </span>
                      </h3>
                      <span className="works-view-project">
                        <a href="/">
                          View Project{" "}
                          <BsBoxArrowInRight style={{ fontSize: "24px" }} />{" "}
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutRight" duration={0.7}>
              <div className="works-items">
                <div className="works-item">
                  <img src={p3} alt="project1" className="project-img" />
                  <div className="works-content">
                    <div className="works-details">
                      <span className="works-category">
                        <a href="/">Raw</a>
                      </span>
                      <h3 className="works-title">
                        <span href="/">Web Personal Portfolio </span>
                      </h3>
                      <span className="works-view-project">
                        <a href="/">
                          View Project{" "}
                          <BsBoxArrowInRight style={{ fontSize: "24px" }} />{" "}
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </Container>
      </section>
    </div>
  );
};
