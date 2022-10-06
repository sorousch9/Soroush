import "./contact.scss";
import { Col, Container, Form, Row } from "react-bootstrap";
import bg1 from "../../assets/map-light.png";
import ScrollAnimation from "react-animate-on-scroll";

export const Contact = () => {
  return (
    <div className="section-contact">
      <section id="contact" name="contact" className="sec">
        <div className="sec-title">
          <span className="section-title-op">Get in Touch</span>
          <ScrollAnimation animateIn="fadeInRight" duration={4}>
            <h2 className="section-title">Contact</h2>
          </ScrollAnimation>
        </div>
        <Container fluid="xl">
          <Row>
            <Col md="4">
              <ScrollAnimation animateIn="fadeIn">
                <div className="contact-info">
                  <img src={bg1} alt="background contact" />
                  <h3>Let's talk about everything!</h3>
                </div>
                <div>
                  <p>Did you want to talk to me ? send me an Email. 👋</p>
                </div>
              </ScrollAnimation>
            </Col>
            <Col md="8">
              <Form mt="6">
                <Row>
                  <Col md="6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control-input"
                        placeholder="Your Name"
                        name="name"
                        id="InputName"
                      />
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control-input"
                        placeholder="Email address"
                        name="email"
                        id="InputEmail"
                      />
                    </div>
                  </Col>
                  <Col md="12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control-input"
                        placeholder="Subject"
                        name="subject"
                        id="InputSubject"
                      />
                    </div>
                  </Col>
                  <Col md="12">
                    <div className="form-group">
                      <textarea
                        className="form-control-textarea"
                        placeholder="Massage"
                        name="message"
                        id="Inputmessage"
                      />
                    </div>
                  </Col>
                  <button
                    className="btn-contact"
                    type="submit"
                    name="submit"
                    id="submit"
                    value="Submit"
                  >
                    Send Message
                  </button>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};
