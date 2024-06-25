import { Container, Row, Col } from "react-bootstrap"
import MailForm from "./MailForm"
import logo from "../assets/img/logo.svg"
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          
          <Col sm={6}>
            <img src={logo} alt="logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/aniket-kumar-413a89b6"><img src={navIcon1} /></a>
              <a href="https://github.com/aniket7277"><img src={navIcon2} /></a>
              <a href="https://www.instagram.com/ak_a_n_i_k_e_t/"><img src={navIcon3} /></a>
            </div>
            <p> © 2024. All Right Reserved to Aniket Kumar</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}