/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { Col, Container, Row } from "react-bootstrap";
import Facebook from "./images/facebook.png";
import Instagram from "./images/instagram.png";
import Twitter from "./images/twitter.png";

function Footer() {
  return (
    <div>
      <section style={{ padding: "1% 0%" }}>
        <Container>
          <Row>
            <Col>
              <span style={{ color: "#FED136" }} class="col-sm-4">
                Copyright © StressBuster 2020
              </span>
            </Col>
            <Col>
              <div class="col-6 d-flex justify-content-center ">
                <a class="mx-2" href="#">
                  <img src={Facebook} />
                </a>
                <a class="mx-2" href="#">
                  <img src={Twitter} />
                </a>
                <a class="mx-2" href="#">
                  <img src={Instagram} />
                </a>
              </div>
            </Col>
            <Col>
              <div>
                <a href="#">
                  <span className="mx-3" style={{ color: "#FED136" }}>
                    Privacy Policy
                  </span>
                </a>
                <a href="#">
                  <span style={{ color: "#FED136" }}>Terms of Use</span>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
export default Footer;
