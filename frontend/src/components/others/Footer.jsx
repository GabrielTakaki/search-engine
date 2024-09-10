import React from "react";
import styled from "styled-components";
import Text from "../data-display/Text";
import { COLORS } from "../../consts/colors";
import Logo from "../../assets/logo.svg";
import Separator from "../general/Separator";
import Divider from "../data-display/Divider";
import { Facebook, Instagram, LinkedIn, Twitter, YouTube } from "@mui/icons-material";

const Container = styled.footer`
  background-color: ${COLORS.primary[50]};
  padding: 40px 64px 40px 170px;
  position: relative;
  z-index: 2000;
  border-top: none;
`;

const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  border-top: none;
`;

const FooterSection = styled.div`
  min-width: 151px;
  display: flex;
  flex-direction: column;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: ${COLORS.neutral[500]};
  margin-bottom: 10px;
  font-size: 14px;

  &:hover {
    color: ${COLORS.primary[500]};
  }
`;

const CompanySection = styled.div`
  width: 100%;
`;

const CopyRightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Footer = () => {
  return (
    <Container>
      <FooterLinksContainer>
        <CompanySection>
          <FooterSection>
            <img src={Logo} alt="Courtcorrect logo" style={{ width: 220, height: 32 }} />
            <Separator size="xs" />
            <Text label="Justice for all." color={COLORS.neutral[500]} />
            <Separator size="sm" />
            <Text label="hello@courtcorrect.com" color={COLORS.neutral[500]} />
            <Text label="33 Percy St, London W1T 2DF" color={COLORS.neutral[500]} />
            <Text label="020 7867 3925" color={COLORS.neutral[500]} />
          </FooterSection>
        </CompanySection>

        <FooterSection>
          <Text label="Quick Links" size="lg" weight="bold" />
          <Separator size="xs" />
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
        <Separator size="xl" />
        <FooterSection>
          <Text label="Legals" size="lg" weight="bold" />
          <Separator size="xs" />
          <FooterLinks>
            <FooterLink href="#">Terms & Conditions</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">AI Safety Policy</FooterLink>
            <FooterLink href="#">Cookie Policy</FooterLink>
            <FooterLink href="#">Compliance Statement</FooterLink>
          </FooterLinks>
        </FooterSection>
      </FooterLinksContainer>
      <Divider size="md" color={COLORS.neutral[50]} />
      <CopyRightContainer>
        <Text label="© 2024 CourtCorrect LTD" color={COLORS.neutral[500]} />
        <IconsContainer>
          <Facebook htmlColor={COLORS.neutral[500]} />
          <Twitter htmlColor={COLORS.neutral[500]} />
          <Instagram htmlColor={COLORS.neutral[500]} />
          <YouTube htmlColor={COLORS.neutral[500]} />
          <LinkedIn htmlColor={COLORS.neutral[500]} />
        </IconsContainer>
      </CopyRightContainer>
    </Container>
  );
};

export default Footer;
