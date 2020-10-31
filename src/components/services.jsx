import { CardColumns, Container } from "react-bootstrap";
import ServiceCard from "./servicecard";
import Anger from "./images/Anger.jpg";
import Counseling from "./images/counseling.jpeg";
import Karoake from "./images/karoke.jpg";
import Meditation from "./images/meditation.png";
import Slamball from "./images/slamball.png";
import vrgames from "./images/vrgames.jpg";
import Blinddate from "./images/blinddate.jpg";
import Cosplay from "./images/cosplay.jpg";
import Deaddiction from "./images/deaddiction.jpg";

function Services() {
  return (
    <div>
      <section style={{ padding: "10% 0% 10%" }} id="services">
        <Container>
          <div>
            <h1 class="text-center mb-5" style={{ fontSize: "50px" }}>
              Our Services
            </h1>
          </div>
          <div class="card-wrapper" style={{ padding: "5% 0% 0%" }}>
            <CardColumns>
              <ServiceCard
                title="Counseling"
                body="Everyone needs a person to tell how they feel. We're human. We seek help from others when we're at our worst. Fear not as we have some of the best counsellors here just to help you out in these tough times."
                imgsrc={Counseling}
              />

              <ServiceCard
                title="Stress & Anxiety therapy"
                body="The goal of these therapies is to teach people how to examine their triggers. Successful Anger Management therapy develops healthy ways for people to express anger and frustration. This service include: Impulse control, Self-awareness, Breathing techniques."
                imgsrc={Anger}
              />

              <ServiceCard
                title="Meditation Classes"
                body="Some prefer to close their eyes and become one with the surroundings. At our meditation rooms, you can heal your soul at tranquility. We help you to clear your soul & body with Yoga and Meditation(Available in Virtual & Offline)"
                imgsrc={Meditation}
              />
            </CardColumns>
            <CardColumns>
              <ServiceCard
                title="De-Addiction"
                body="Addiction to habits which are not healthy to your mental and physical body can be treated with 'Dopomine Detox' therapy. In this Therapy, we will guide you to detox the habits which are not good."
                imgsrc={Deaddiction}
              />

              <ServiceCard
                title="Karoake"
                body="Always wanted to sing something but have no stage? We provide you the room to bring out your courage and enjoy to the peaks with your Colleagues/Friends/Family."
                imgsrc={Karoake}
              />
              <ServiceCard
                title="Slam Ball"
                body="Want to stretch out and relax the old fashioned way with soul music and serenity? Check out our yoga rooms where no one is disturbed so you can have your peace in this troubled world."
                imgsrc={Slamball}
              />
            </CardColumns>
            <CardColumns>
              <ServiceCard
                title="Cosplay"
                body="Want to stretch out and relax the old fashioned way with soul music and serenity? Check out our yoga rooms where no one is disturbed so you can have your peace in this troubled world."
                imgsrc={Cosplay}
              />
              <ServiceCard
                title="Blind Date"
                body="Meeting new people & forming new relationships is always kinda interesting and stress-relieving. Our Blind Dates organizing helps people to meet and interact with opposite gender"
                imgsrc={Blinddate}
              />
              <ServiceCard
                title="VR Gaming/Exploration"
                body="It's always been our dream to enter the world of gaming and play there. With today's technology, that is very much possible! With our various VR sets. All we can say now is have fun!😉"
                imgsrc={vrgames}
              />
            </CardColumns>
          </div>
        </Container>
      </section>
    </div>
  );
}
export default Services;
