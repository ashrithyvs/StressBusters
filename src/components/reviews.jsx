import { Tab, Row, Col, ListGroup, Container, Figure } from "react-bootstrap";
import img1 from "./images/2.jpg";
import img2 from "./images/3.jpg";
import img3 from "./images/4.jpg";

function Reviews() {
  return (
    <div>
      <section style={{ padding: "10% 0% 10%" }} id="reviews">
        <div>
          <h1 class="text-center pb-5" style={{ fontSize: "50px" }}>
            Testimonials
          </h1>
        </div>
        <Container>
          <Figure>
            <Figure.Image
              class="figimg"
              width={171}
              height={180}
              alt="171x180"
              style={{
                borderRadius: "50%",
                marginLeft: "42%",
              }}
              src={img1}
            />
            <Figure.Caption>
              <h3 class="text-center mt-3">Evelyn Angel</h3>
              <p class="text-center lead">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur nihil non tempore voluptatem laboriosam voluptatum id
                quasi saepe neque, aliquid quidem dicta possimus rem accusantium
                illo nostrum quo! Obcaecati, minima.
              </p>
            </Figure.Caption>
          </Figure>
          <Figure>
            <Figure.Image
              class="figimg"
              width={171}
              height={180}
              alt="171x180"
              style={{
                borderRadius: "50%",
                marginLeft: "42%",
              }}
              src={img2}
            />
            <Figure.Caption>
              <h3 class="text-center mt-3">Michel Morron</h3>
              <p class="text-center lead">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur nihil non tempore voluptatem laboriosam voluptatum id
                quasi saepe neque, aliquid quidem dicta possimus rem accusantium
                illo nostrum quo! Obcaecati, minima.
              </p>
            </Figure.Caption>
          </Figure>
          <Figure>
            <Figure.Image
              class="figimg"
              width={171}
              height={180}
              alt="171x180"
              style={{
                borderRadius: "50%",
                marginLeft: "42%",
              }}
              src={img3}
            />
            <Figure.Caption>
              <h3 class="text-center mt-3">Joshua Ackel</h3>
              <p class="text-center lead">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur nihil non tempore voluptatem laboriosam voluptatum id
                quasi saepe neque, aliquid quidem dicta possimus rem accusantium
                illo nostrum quo! Obcaecati, minima.
              </p>
            </Figure.Caption>
          </Figure>
        </Container>
      </section>
    </div>
  );
}

export default Reviews;

{
  /* <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
              <Col sm={2}>
                <ListGroup>
                  <ListGroup.Item action href="#link1">
                    <img src={introbg} />
                    Link 1
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link2">
                    <img src={introbg} />
                    Link 2
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link3">
                    <img src={introbg} />
                    Link 1
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link4">
                    <img src={introbg} />
                    Link 1
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link5">
                    <img src={introbg} />
                    Link 1
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link6">
                    <img src={introbg} />
                    Link 1
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col sm={5}>
                <Tab.Content>
                  <Tab.Pane eventKey="#link1">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur nihil non tempore voluptatem laboriosam
                    voluptatum id quasi saepe neque, aliquid quidem dicta
                    possimus rem accusantium illo nostrum quo! Obcaecati,
                    minima.
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur nihil non tempore voluptatem laboriosam
                    voluptatum id quasi saepe neque, aliquid quidem dicta
                    possimus rem accusantium illo nostrum quo! Obcaecati,
                    minima.
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur nihil non tempore voluptatem laboriosam
                    voluptatum id quasi saepe neque, aliquid quidem dicta
                    possimus rem accusantium illo nostrum quo! Obcaecati,
                    minima.
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur nihil non tempore voluptatem laboriosam
                    voluptatum id quasi saepe neque, aliquid quidem dicta
                    possimus rem accusantium illo nostrum quo! Obcaecati,
                    minima.
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link5">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur nihil non tempore voluptatem laboriosam
                    voluptatum id quasi saepe neque, aliquid quidem dicta
                    possimus rem accusantium illo nostrum quo! Obcaecati,
                    minima.
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link6">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur nihil non tempore voluptatem laboriosam
                    voluptatum id quasi saepe neque, aliquid quidem dicta
                    possimus rem accusantium illo nostrum quo! Obcaecati,
                    minima.
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>*/
}
