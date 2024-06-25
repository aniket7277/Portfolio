import { Container, Row, Col, Tab, Nav, Button } from "react-bootstrap";
import { Hr, PcHorizontal } from "react-bootstrap-icons";

export const Experience = () => {
    return(
    <section className="experience" id="experience">
        <h1>Experience</h1>
        <Container className="expContainer">
            <div className="title">
                <h3>Software Engineer, Credera</h3>
                <h3>July 2021 - Present</h3>
            </div>
            <div className="description">
                <p>Currently working as a Software Engineer at Credera, where I am involved in Front-End development. 
                    I utilize my skills in JavaScript, React, SQL, HTML CSS, React-Native, TypeScript, Java, C++, and Git, 
                    to design and implement high-quality solutions.
                </p>
                <ul>
                    <li>Collaborate with cross-functional teams to gather requirements and analyze user needs.</li>
                    <li>Design and develop UI components using Java, JavaScript, React, and React-Native.</li>
                    <li>Utilize Git for version control and collaboration.</li>
                    <li>Implement responsive and user-friendly web interfaces using React and HTML CSS</li>
                    <li>Utilize SQL databases for data storage and retrieval.</li>
                </ul>
                <h4>Hyderabad</h4>
            </div>
        </Container>

        <hr className="hrLine"/>

        <h1 id="education">Education</h1>
        <Container className="eduContainer">
            <div className="title">
                <h3>Bachelor of Technology, Kalinga Institute of Industrial Technology</h3>
                <h3>Aug 17 – Jun 21</h3>
            </div>
            <p>Completed my B.Tech in Computer Science.
            </p>
            <h4>Bhubaneshwar</h4>
        </Container>
        <Container className="eduContainer">
            <div className="title">
                <h3>High School, DAV Kapildev public school</h3>
                <h3>May 15 - Mar 17</h3>
            </div>
            <p>Completed my High School in Mathematics and Science .
            </p>
            <h4>Ranchi</h4>
        </Container>
    </section>
    )
}

export default Experience;