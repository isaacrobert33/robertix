import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import Logo from "./Logo";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <Logo id={"footerlogo"}></Logo>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/isaac-robert-156435224/" target={"_blank"} rel={"noreferrer"}><img src={navIcon1} alt="Icon" /></a>
              <a href="https://web.facebook.com/isaacrobert.owoyemi" target={"_blank"} rel={"noreferrer"}><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/_robertix/" target={"_blank"} rel={"noreferrer"}><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p><b>©</b> 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
