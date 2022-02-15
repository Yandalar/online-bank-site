import React from "react";
import { animateScroll as scroll } from "react-scroll/modules";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksWrapper,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinkTitle,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Title</FooterLinkTitle>
              <FooterLink to="/signin">Footer Link</FooterLink>
              <FooterLink to="/signin">Footer Link</FooterLink>
              <FooterLink to="/signin">Footer Link</FooterLink>
              <FooterLink to="/signin">Footer Link</FooterLink>
              <FooterLink to="/signin">Footer Link</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Title</FooterLinkTitle>
              <FooterLink to="/signin">Footer Link</FooterLink>
              <FooterLink to="/signin">Footer Link</FooterLink>
              <FooterLink to="/signin">Footer Link</FooterLink>
              <FooterLink to="/signin">Footer Link</FooterLink>
              <FooterLink to="/signin">Footer Link</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Title</FooterLinkTitle>
              <FooterLink to="/signin">Footer Link</FooterLink>
              <FooterLink to="/signin">Footer Link</FooterLink>
              <FooterLink to="/signin">Footer Link</FooterLink>
              <FooterLink to="/signin">Footer Link</FooterLink>
              <FooterLink to="/signin">Footer Link</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Title</FooterLinkTitle>
              <FooterLink to="/signin">Footer Link</FooterLink>
              <FooterLink to="/signin">Footer Link</FooterLink>
              <FooterLink to="/signin">Footer Link</FooterLink>
              <FooterLink to="/signin">Footer Link</FooterLink>
              <FooterLink to="/signin">Footer Link</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Online Bank
            </SocialLogo>
            <WebsiteRights>
              Online Bank © {new Date().getFullYear()}
              All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facbook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
