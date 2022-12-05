import React from "react";
import { RiMoonClearFill } from "react-icons/ri";
import { FaFacebookMessenger } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { Content } from "../styles/Content";
import {
  Information,
  Title,
  Subtitle,
  Description,
} from "../styles/Information";
import { Footer, Icon } from "../styles/Footer";
import { FooterLinks, SocialMediaLabel } from "../styles/FooterLinks";
import pictureIcon from "../assets/pictureIcon.png";

const HeroInformation = () => {
  return (
    <Content>
      <RiMoonClearFill />
      <Information>
        <Title>Ryan Bitonio</Title>
        <Subtitle>Developer and Designer</Subtitle>
        <Description>
          Freelancer based from Bulacan, Philippines with 3+ years of experience
          as full stack developer, providing services for programming and design
          content needs.
        </Description>
      </Information>
      <Footer>
        <Icon src={pictureIcon} alt="dp icon" />
        <FooterLinks>
          <FaFacebookMessenger />
          <SocialMediaLabel>Facebook</SocialMediaLabel>
          <ImGithub />
          <SocialMediaLabel>Github</SocialMediaLabel>
        </FooterLinks>
      </Footer>
    </Content>
  );
};
export default HeroInformation;
