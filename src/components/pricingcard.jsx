import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

function PricingCard(props) {
  return (
    <div>
      <Card className="rounded-lg">
        <Card.Body>
          <Card.Title>
            <h4 class="text-center mt-3">{props.title}</h4>
          </Card.Title>
          <Card.Text>
            <h2 className="text-center">{props.price}</h2>
          </Card.Text>
          <Card.Text class="mx-2 mt-3">{props.description}</Card.Text>
        </Card.Body>
        <Button
          class="btn btn-outline-warning btn-block"
          style={{ margin: "3% 10% 10% 10%", width: "80%" }}
          variant="outline-warning"
        >
          Buy Now!
        </Button>
        <Card.Footer>
          <small className="text-muted">{props.footer}</small>
        </Card.Footer>
      </Card>
    </div>
  );
}
export default PricingCard;
