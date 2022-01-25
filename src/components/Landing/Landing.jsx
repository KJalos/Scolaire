import Container from "../Layout/Container";
import Card from "../UI/Card";
import Button from "../UI/Forms/Button";
import classes from "./Landing.module.css";

const Landing = () => {
  return (
    <main className={classes.main}>
      <section className={classes.hero}>
        <Container className={classes["hero-container"]}>
          <Card className={classes["hero-body"]}>
            <h2>Learning Simplified</h2>
            <p>
              Get organized by digitizing your life. Scolaire simplifies
              organization and boosts your productivity with study advice and
              assistance.
            </p>
            <Button>Get Started</Button>
          </Card>
        </Container>
      </section>
      <section className={classes.about}>
        <Container className={classes["about-container"]}>
          <div className={classes.body}>
            <h2>About us</h2>
            <p>
              Vagon suprakenar: en krogåse. Fänera orade desmani. Krosm kaharen.
              Tin laling. Dörad iligen. Diacentrism kropevis lans. Sakeheten
              vynde. Autorade brorsantrick. Lalingar pres, nett. Manar bengen.
              Henavis.{" "}
            </p>
          </div>
          <img
            src={require("./about-us-img.png")}
            alt="Sticky notes on a white board"
          />
        </Container>
      </section>
    </main>
  );
};

export default Landing;
