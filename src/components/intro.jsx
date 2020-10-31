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
          <div class="intro-text text-dark">
            <div>
              <h1>Life is too short to stress yourself.</h1>
            </div>
            <div>
              <h3>
                <i>Come have fun with us!</i>
              </h3>
            </div>
            <div class="btn-wrapper mt-4">
              <Button
                class="mx-3"
                style={{ position: "relative", left: "51%" }}
                variant="warning"
              >
                Login
              </Button>
              <Button
                class="mr-3"
                style={{ position: "relative", left: "37%" }}
                variant="warning"
              >
                Register
              </Button>
            </div>
          </div>
        </Container>
      </header>
    </div>
  );
}

export default Intro;
