import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <h1
        style={{ color: "green", textAlign: "center", marginTop: "-50px" }}
      ></h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Writing</FooterLink>
            <FooterLink href="#">Internships</FooterLink>
            <FooterLink href="#">Coding</FooterLink>
            <FooterLink href="#">Teaching</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Uttar Pradesh</FooterLink>
            <FooterLink href="#">Ahemdabad</FooterLink>
            <FooterLink href="#">Indore</FooterLink>
            <FooterLink href="#">Mumbai</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <img
                  style={{ width: "50px" }}
                  src="https://img.icons8.com/cute-clipart/2x/facebook-new.png"
                />
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <img
                  style={{ width: "50px" }}
                  src="https://img.icons8.com/cute-clipart/2x/instagram-new.png"
                />
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <img
                  style={{ width: "50px" }}
                  src="https://img.icons8.com/cute-clipart/2x/twitter.png"
                />
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <img
                  style={{ width: "50px" }}
                  src="https://img.icons8.com/cute-clipart/2x/youtube-play.png"
                />
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
