import { Container } from "react-bootstrap";
import "./works.scss";
import p1 from "../../assets/1.png";
import p2 from "../../assets/2.png";
import p3 from "../../assets/3.png";
import { BsBoxArrowInRight } from "react-icons/bs";

export const Works = () => {
  return (
    <div id="works" className="sec">
      <Container fluid="xl">
        <div className="sec-title">
          <span className="section-title-op">WORKS</span>
          <h2 className="section-title">My Amazing Works</h2>
        </div>
        <div className="works-list">
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
        </div>
      </Container>
    </div>
  );
};
