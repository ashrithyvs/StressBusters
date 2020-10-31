import React from "react";
import Form from "react-bootstrap/Form";
import { Button, Col } from "react-bootstrap";
import emailjs from "emailjs-com";
const bg = {
  background: "#212529",
  padding: "10% 0% 5%",
};

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jvktgal",
        "stressbusters",
        e.target,
        "user_04NgBa6OrljmYyYztWVK5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <section className="bg-dark" id="contact" style={bg}>
        <h1 class="text-center" style={{ color: "#FED136", fontSize: "50px" }}>
          Want to Ping us?
        </h1>
        <Form
          style={{ padding: "5% 5% 5% 10%" }}
          noValidate
          onSubmit={sendEmail}
        >
          <Form.Group>
            <Form.Label style={{ color: "#FED136" }}>
              Enter your Name
            </Form.Label>
            <Form.Row>
              <Col sm={3}>
                <Form.Control
                  required
                  type="text"
                  placeholder="First Name"
                  name="first_name"
                />
              </Col>
              <Col sm={3}>
                <Form.Control
                  required
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                />
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group>
            <Form.Row>
              <Col md={6}>
                <Form.Label style={{ color: "#FED136" }}>
                  Enter your Email Adress
                </Form.Label>
                <Form.Control
                  required
                  name="email"
                  type="email"
                  placeholder="Your Email Address"
                />
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group>
            <Form.Row>
              <Col md={6}>
                <Form.Label style={{ color: "#FED136" }}>
                  Enter your Phone Number
                </Form.Label>
                <Form.Control
                  required
                  type="tel"
                  placeholder="Your Phone Number"
                />
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group>
            <Form.Row>
              <Col md={6}>
                <Form.Label style={{ color: "#FED136" }}>
                  Message (optional)
                </Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={5}
                  placeholder="Enter your Message here"
                />
              </Col>
            </Form.Row>
          </Form.Group>
          <Button variant="outline-warning" type="submit" value="Send">
            Submit
          </Button>
        </Form>
      </section>
    </div>
  );
}

export default Contact;
