import { Container, Row, Col } from "react-bootstrap";
import { MyCV } from "./MyCV";
import logo from "../assets/img/logo.svg";
import navicon1 from '../assets/img/nav-icon1.svg';
import navicon2 from '../assets/img/nav-icon2.svg';
import navicon3 from '../assets/img/nav-icon3.png';

import 'animate.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MyCV />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="#"><img src={navicon1} alt="" /></a>
              <a href="#"><img src={navicon2} alt="" /></a>
              <a href="#"><img src={navicon3} alt="" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}