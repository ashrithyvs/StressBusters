import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button, Col, Container } from "react-bootstrap";
import cbg from "./images/c2.png";

const bg = {
  // backgroundImage: `url(${cbg})`,
  // backgroundSize: "cover",
  // height: "120vh",
  background: "#212529",
  padding: "10% 0% 5%",
};

function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div>
      <section className="bg-dark" id="contact" style={bg}>
        <h1 class="text-center" style={{ color: "#FED136", fontSize: "50px" }}>
          Want to Ping us?
        </h1>
        <Form
          style={{ padding: "5% 5% 5% 10%" }}
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Form.Group>
            <Form.Label style={{ color: "#FED136" }}>
              Enter your Name
            </Form.Label>
            <Form.Row>
              <Col sm={3}>
                <Form.Control required type="text" placeholder="First Name" />
              </Col>
              <Col sm={3}>
                <Form.Control required type="text" placeholder="Last Name" />
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
                  rows={5}
                  placeholder="Enter your Message here"
                />
              </Col>
            </Form.Row>
          </Form.Group>
          <Button variant="outline-warning" type="submit">
            Submit
          </Button>
        </Form>
      </section>
    </div>
  );
}
export default Contact;
