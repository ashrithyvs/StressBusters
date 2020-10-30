const { Container } = require("react-bootstrap");

function About() {
  return (
    <div>
      <section id="about">
        <Container style={{ padding: "10% 0% 10%" }}>
          <div>
            <h1 class="text-center mb-5" style={{ fontSize: "50px" }}>
              About us
            </h1>
            <h4 class="lead">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur nihil non tempore voluptatem laboriosam voluptatum id
              quasi saepe neque, aliquid quidem dicta possimus rem accusantium
              illo nostrum quo! Obcaecati, minima.
            </h4>
          </div>
        </Container>
      </section>
    </div>
  );
}
export default About;
