import { Col, Container, Row } from "react-bootstrap";
import Facebook from "./images/facebook.png";
import Instagram from "./images/instagram.png";
import Twitter from "./images/twitter.png";

function Footer() {
  return (
    <div>
      <section style={{ padding: "1% 0% 1%" }}>
        <Container>
          <Row>
            <span style={{ color: "#FED136" }} class="d-flex col-3">
              Copyright © StressBuster 2020
            </span>
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
            <div class="d-flex col-3">
              <a href="#">
                <span style={{ color: "#FED136" }}>Privacy Policy</span>
              </a>
              <a href="#">
                <span style={{ color: "#FED136", marginLeft: "20px" }}>
                  Terms of Use
                </span>
              </a>
            </div>
          </Row>
        </Container>
      </section>
    </div>
  );
}
export default Footer;
