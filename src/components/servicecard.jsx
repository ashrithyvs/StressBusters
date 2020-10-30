import { Card } from "react-bootstrap";

function ServiceCard(props) {
  return (
    <div>
      <Card className="shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Img variant="top" src={props.imgsrc} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.body}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

function ImgCard(props) {
  return (
    <div>
      <Card className="bg-dark text-white">
        <Card.Img src={props.imgsrc} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.body}</Card.Text>
          <Card.Text>{props.footer}</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}
export default ServiceCard;
export { ImgCard };
