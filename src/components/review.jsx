import { Tab, Row, Col, ListGroup } from "react-bootstrap";

function Review(props) {
  return (
    <div>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
          <Col sm={4}>
            <ListGroup>
              <ListGroup.Item action href={props.link}>
                {props.title}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane eventKey={props.link}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur nihil non tempore voluptatem laboriosam voluptatum id
                quasi saepe neque, aliquid quidem dicta possimus rem accusantium
                illo nostrum quo! Obcaecati, minima.
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default Review;
