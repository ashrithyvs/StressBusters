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
              title="For Individual Services"
              footer="* prices can be varied"
              description="For Individual services, Slot booking is a must for Karoake, De-Addiction, Counseling. All remaining Services can be availed at the 'StressBusters' itself. For each individual service purchase, you can avail the service for 3 times maximum only."
              price="5$*"
            />
            <PricingCard
              title="Monthly Subscription"
              price="30$*"
              footer="* prices can be varied"
              description="This package is for people who doesn't like the hassel to book individual services frequently. This is curated for Monthly Based usage of Services. This package includes all our services for 5 times maximum(except karoake,slamball). We will avail you a Membership Card which stores all the points based on your services avalings"
            />
            <PricingCard
              title="Corporate Bonanza"
              price="$3000*"
              footer="* prices can be varied"
              description="This package is for Organization based Clients who have concerns and care about their Employees' Mental and Health conditions. This package include:  Karaoke rooms, Yoga sessions, Meditation Therapy, Anger Management Therapy, Spiritual Counseling"
            />
          </CardColumns>
        </Container>
      </section>
    </div>
  );
}

export default Pricing;
