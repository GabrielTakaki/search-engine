import React from "react";
import styled from "styled-components";
import Text from "../data-display/Text";
import { COLORS } from "../../consts/colors";
import Logo from "../../assets/logo.svg";

const FooterContainer = styled.footer`
  background-color: ${COLORS.primary.lightest};
  padding: 20px 40px;
  position: relative;
  z-index: 2000;
  display: flex;
  justify-content: space-between;
  align-items: start;
  border-top: none;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: ${COLORS.neutral.gray};
  margin-bottom: 8px;

  &:hover {
    color: ${COLORS.primary.default};
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;

  a {
    color: ${COLORS.neutral.gray};
    font-size: 20px;

    &:hover {
      color: ${COLORS.primary.default};
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <img src={Logo} alt="Courtcorrect logo" />
        <Text label="Justice for all." size="md" />
        <Text label="hello@courtcorrect.com" size="sm" color={COLORS.neutral.gray} />
        <Text label="33 Percy St, London W1T 2DF" size="sm" color={COLORS.neutral.gray} />
        <Text label="020 7867 3925" size="sm" color={COLORS.neutral.gray} />
      </FooterSection>

      <FooterSection>
        <Text label="Quick Links" size="lg" weight="bold" />
        <FooterLinks>
          <FooterLink href="#">Home</FooterLink>
          <FooterLink href="#">Data</FooterLink>
          <FooterLink href="#">Cases</FooterLink>
          <FooterLink href="#">Customers</FooterLink>
          <FooterLink href="#">Search Engine</FooterLink>
          <FooterLink href="#">Custom Fields</FooterLink>
          <FooterLink href="#">Support</FooterLink>
        </FooterLinks>
      </FooterSection>

      <FooterSection>
        <Text label="Legals" size="lg" weight="bold" />
        <FooterLinks>
          <FooterLink href="#">Terms & Conditions</FooterLink>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">AI Safety Policy</FooterLink>
          <FooterLink href="#">Cookie Policy</FooterLink>
          <FooterLink href="#">Compliance Statement</FooterLink>
        </FooterLinks>
      </FooterSection>

      <FooterSection>
        <SocialIcons>
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#">
            <i className="fab fa-tiktok"></i>
          </a>
        </SocialIcons>
      </FooterSection>
    </FooterContainer>
  );
};

export default Footer;
