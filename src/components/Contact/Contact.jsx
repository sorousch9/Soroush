import "./contact.scss";
import { Col, Container, Row } from "react-bootstrap";
import bg1 from "../../assets/map-light.png";
import ScrollAnimation from "react-animate-on-scroll";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!email || !subject || !message) {
      return toast.error('Please fill required fields');
    }
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/email`, {
        name,
        email,
        subject,
        message,
      });
      setLoading(false);
      toast.success(data.message);
    } catch (err) {
      setLoading(false);
      toast.error(
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message
      );
    }
  };
  return (
    <div className="section-contact">
      <ToastContainer position="bottom-center" limit={1} />
      <section id="contact" name="contact" className="sec">
        <div className="sec-title">
          <span className="section-title-op">Get in Touch</span>
          <ScrollAnimation animateIn="swing" duration={1.5}>
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
              <form mt="6" onSubmit={submitHandler}>
                <Row>
                  <Col md="6">
                    <div className="form-group">
                      <input
                      id="name"
                      required
                        type="text"
                        className="form-control-input"
                        placeholder="Your Name"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="form-group">
                      <input
                      required
                      id="email"
                        type="email"
                        className="form-control-input"
                        placeholder="Email address"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </Col>
                  <Col md="12">
                    <div className="form-group">
                      <input
                      required
                      id="subject"
                        type="text"
                        className="form-control-input"
                        placeholder="Subject"
                        onChange={(e) => setSubject(e.target.value)}
                      />
                    </div>
                  </Col>
                  <Col md="12">
                    <div className="form-group">
                      <textarea
                         required
                      id="message"
                        className="form-control-textarea"
                        placeholder="Massage"
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                  </Col>
                  <button
                    className="btn-contact"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Sending ..." : "Send Message"}
                  </button>
                </Row>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};
