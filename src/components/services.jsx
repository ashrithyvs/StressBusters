import { CardColumns, Container } from "react-bootstrap";
import ServiceCard from "./servicecard";
import introbg from "./images/1.jpg";

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
                title="rollercoaster"
                body="
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ea autem aut asperiores voluptatem obcaecati sint ducimus quod, quibusdam eligendi facere quam culpa! Eveniet maxime unde provident quibusdam ipsam dolorum!"
                imgsrc={introbg}
              />
              <ServiceCard
                title="rollercoaster"
                body="
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ea autem aut asperiores voluptatem obcaecati sint ducimus quod, quibusdam eligendi facere quam culpa! Eveniet maxime unde provident quibusdam ipsam dolorum!"
                imgsrc={introbg}
              />
              <ServiceCard
                title="rollercoaster"
                body="
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ea autem aut asperiores voluptatem obcaecati sint ducimus quod, quibusdam eligendi facere quam culpa! Eveniet maxime unde provident quibusdam ipsam dolorum!"
                imgsrc={introbg}
              />
              <ServiceCard
                title="rollercoaster"
                body="
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ea autem aut asperiores voluptatem obcaecati sint ducimus quod, quibusdam eligendi facere quam culpa! Eveniet maxime unde provident quibusdam ipsam dolorum!"
                imgsrc={introbg}
              />
              <ServiceCard
                title="rollercoaster"
                body="
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ea autem aut asperiores voluptatem obcaecati sint ducimus quod, quibusdam eligendi facere quam culpa! Eveniet maxime unde provident quibusdam ipsam dolorum!"
                imgsrc={introbg}
              />
              <ServiceCard
                title="rollercoaster"
                body="
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ea autem aut asperiores voluptatem obcaecati sint ducimus quod, quibusdam eligendi facere quam culpa! Eveniet maxime unde provident quibusdam ipsam dolorum!"
                imgsrc={introbg}
              />
              <ServiceCard
                title="rollercoaster"
                body="
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ea autem aut asperiores voluptatem obcaecati sint ducimus quod, quibusdam eligendi facere quam culpa! Eveniet maxime unde provident quibusdam ipsam dolorum!"
                imgsrc={introbg}
              />
              <ServiceCard
                title="rollercoaster"
                body="
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ea autem aut asperiores voluptatem obcaecati sint ducimus quod, quibusdam eligendi facere quam culpa! Eveniet maxime unde provident quibusdam ipsam dolorum!"
                imgsrc={introbg}
              />
              <ServiceCard
                title="rollercoaster"
                body="
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ea autem aut asperiores voluptatem obcaecati sint ducimus quod, quibusdam eligendi facere quam culpa! Eveniet maxime unde provident quibusdam ipsam dolorum!"
                imgsrc={introbg}
              />
            </CardColumns>
          </div>
        </Container>
      </section>
    </div>
  );
}
export default Services;
