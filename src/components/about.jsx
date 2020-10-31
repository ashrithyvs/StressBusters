const { Container } = require("react-bootstrap");

function About() {
  return (
    <div>
      <div class="about-wrapper">
        <section id="about" style={{ background: "rgb(254,209,54)" }}>
          <Container style={{ padding: "10% 0% 10%" }}>
            <div>
              <h1 class="text-center mb-5" style={{ fontSize: "50px" }}>
                About us
              </h1>
              <h4 class="lead text-center" style={{ fontSize: "27px" }}>
                We at StressBusters aim to provide a place where you can forget
                about all your worries and stress. Imagine coming home after a
                stressful day at work and just having fun instead of finishing
                up your work and giving yourself a headache. Well imagine and
                worry no more because StressBusters is here for your rescue.
                Come and have fun at StressBusters and release that huge bubble
                of stress that's building up inside you.
              </h4>
            </div>
          </Container>
        </section>
        <section style={{ background: "rgb(33,37,41)" }}>
          <Container style={{ padding: "10% 0% 10%" }}>
            <div>
              <h1
                class="text-center mb-5"
                style={{ fontSize: "50px", color: "rgb(254,209,54)" }}
              >
                <i>Dear Stress, Let's breakup ;-;</i>
              </h1>
              <h4
                class="lead text-center"
                style={{ fontSize: "27px", color: "rgb(254,209,54)" }}
              >
                Everyone has hard days at work where all we want to do is quit
                and drink until our soul is at peace. It's very difficult to
                maintain a full time job and be happy. We at StressBusters fully
                and completely understand that which is why we've come together
                and built this place. It's affordable, fun and you can relax
                without having to think too much about your work related issues.
                StressBusters wants you to have solitude and a place to escape
                the harsh reality even if it's just for some time.
              </h4>
            </div>
            <h3 style={{ fontSize: "35px" }}></h3>
          </Container>
        </section>
      </div>
    </div>
  );
}
export default About;
