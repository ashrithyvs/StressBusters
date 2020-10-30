import { CardColumns, Container } from "react-bootstrap";
import PricingCard from "./pricingcard";

function Pricing() {
  return (
    <div>
      <section
        style={{ padding: "10% 0% 10%", background: "rgb(33,37,41)" }}
        id="pricing"
      >
        <div>
          <h1
            style={{
              color: "rgb(254,209,54)",
              paddingBottom: "5%",
              fontSize: "50px",
            }}
          >
            Pricing
          </h1>
        </div>
        <Container>
          <CardColumns>
            <PricingCard
              title="For Individual"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur nihil non tempore voluptatem laboriosam voluptatum id
                quasi saepe neque, aliquid quidem dicta possimus rem accusantium
                illo nostrum quo! Obcaecati, minima."
              price="5$"
            />
            <PricingCard
              title="For Individual"
              price="50$"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur nihil non tempore voluptatem laboriosam voluptatum id
                quasi saepe neque, aliquid quidem dicta possimus rem accusantium
                illo nostrum quo! Obcaecati, minima."
            />
            <PricingCard
              title="For Individual"
              price="10000$"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur nihil non tempore voluptatem laboriosam voluptatum id
                quasi saepe neque, aliquid quidem dicta possimus rem accusantium
                illo nostrum quo! Obcaecati, minima."
            />
          </CardColumns>
        </Container>
      </section>
    </div>
  );
}

export default Pricing;
