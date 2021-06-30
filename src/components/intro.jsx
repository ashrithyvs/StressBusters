import { Container, Button } from "react-bootstrap";
import introbg from "./images/1.jpg";
import "../css/intro.css";

const bg = {
  backgroundImage: `url(${introbg})`,
  backgroundSize: "cover",
  height: "100vh",
};

function Intro() {
  return (
    <div>
      <header class="intro" style={bg}>
        <Container style={{ padding: "15% 0% 10%" }}>
          <div class="text-center text-light">
            <div>
              <h2>Life is too short to get stressed.</h2>
            </div>
            <div>
              <h3>
                <i>Come relieve stress with us!</i>
              </h3>
            </div>
            <div class="btn-wrapper mt-4">
              <Button className="mx-3" variant="warning">
                Login
              </Button>
              <Button variant="warning">Register</Button>
            </div>
          </div>
        </Container>
      </header>
    </div>
  );
}

export default Intro;
