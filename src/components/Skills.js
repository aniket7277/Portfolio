import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assets/img/meter1.svg"
import meter2 from "../assets/img/meter2.svg"
import meter3 from "../assets/img/meter3.svg"
import colorSharp from "../assets/img/color-sharp.png"
import bootstrap from "../assets/img/skills/bootstrap.svg";
import css from "../assets/img/skills/css.svg";
import git from "../assets/img/skills/git.svg";
import html from "../assets/img/skills/html.svg";
import java from "../assets/img/skills/java.svg";
import jira from "../assets/img/skills/jira.svg";
import js from "../assets/img/skills/js.svg";
import mysql from "../assets/img/skills/mysql.svg";
import nodejs from "../assets/img/skills/nodejs.svg";
import python from "../assets/img/skills/python.svg";
import react from "../assets/img/skills/react.svg";
import tailwind from "../assets/img/skills/tailwind.svg";
import drupal from "../assets/img/skills/drupal.svg";
import TS from "../assets/img/skills/TS.svg";
import agile from "../assets/img/skills/agile.svg";
import "../App.css";


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className='skills' id='skills'>
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>
                My Skills
              </h2>
              {/* <p>Lorem Insum is simply dummy text of printing and typesetting industry.<br/>when an unknow printer took a galley of type and scrambled it to make a type specimen book.</p> */}
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <img src={html} alt="image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css} alt="image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={js} alt="image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={TS} alt="image" />
                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <img src={react} alt="image" />
                  <h5>React JS</h5>
                </div>
                <div className="item">
                  <img src={react} alt="image" />
                  <h5>React-Native</h5>
                </div>
                <div className="item">
                  <img src={nodejs} alt="image" />
                  <h5>Node JS</h5>
                </div>
                <div className="item">
                  <img src={bootstrap} alt="image" />
                  <h5>BootStrap</h5>
                </div>
                <div className="item">
                  <img src={tailwind} alt="image" />
                  <h5>Tailwind</h5>
                </div>
                <div className="item">
                  <img src={java} alt="image" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={mysql} alt="image" />
                  <h5>MYSQL</h5>
                </div>
                <div className="item">
                  <img src={python} alt="image" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={git} alt="image" />
                  <h5>GIT</h5>
                </div>
                <div className="item">
                  <img src={jira} alt="image" />
                  <h5>JIRA</h5>
                </div>
                <div className="item">
                  <img src={drupal} alt="image" />
                  <h5>DRUPAL</h5>
                </div>
                <div className="item">
                  <img src={agile} alt="image" />
                  <h5>Agile Methodology</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      
    </section>
  )
}

export default Skills;