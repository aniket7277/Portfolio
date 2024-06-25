import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, prolink , stack}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <a className="proBtn" href={prolink}>See Project</a>
        </div>
      </div>
      <p>Tech Stacks Used : {stack}</p>
    </Col>
  )
}