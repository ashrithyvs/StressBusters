import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

function PricingCard(props) {
  return (
    <div>
      <Card className="rounded-lg">
        <Card.Body>
          <Card.Title>
            <h3 class="text-center mt-3">{props.title}</h3>
          </Card.Title>
          <Card.Text>
            <h1>{props.price}</h1>
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
      </Card>
    </div>
  );
}
export default PricingCard;
