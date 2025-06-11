import React from "react";
import FooterInfo from "./FooterInfo";
import FooterLinks from "./FooterLinks";
import FooterTrust from "./FooterTrust";
import FooterApps from "./FooterApps";
import FooterBottom from "./FooterBottom";
import Container from "@/components/module/container/Container";

function Footer() {
  return (
    <footer>
      <Container>
        <div className="footer-info-wrapper">
          <FooterInfo />
          <FooterLinks />
          <FooterTrust />
        </div>
        <FooterApps />
        <FooterBottom />
      </Container>
    </footer>
  );
}

export default Footer;
