import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Switch from "../components/Switch";
import { ThemeProvider } from "styled-components";
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
import { Toggle } from "../styles/Toggle";
import pictureIcon from "../assets/pictureIcon.png";
import backgroundTexture from "../assets/backgroundTexture.png";
import Sun from "../assets/icons/Sun";
import Moon from "../assets/icons/Moon";

const Container = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.background};
  background-image: url(${backgroundTexture});
  background-blend-mode: soft-light;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${props => props.theme.color};
  transition: all 0.7s ease;

  svg {
    color: ${props => props.theme.color};
  }
`;

const darkTheme = {
  background: "#151515",
  color: "#f1f1f1",
  icons: "#f1f1f1",
};

const lightTheme = {
  background: "#f1f1f1",
  color: "#151515",
  icons: "#151515",
};

const HeroInformation = () => {
  const [theme, setTheme] = useState("dark");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Container>
        <Content>
          <Toggle>
            <Sun />
            <Switch toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
            <Moon />
          </Toggle>
          <Information>
            <Title>Ryan Bitonio</Title>
            <Subtitle>Developer and Designer</Subtitle>
            <Description>
              Freelancer based from Bulacan, Philippines with 3+ years of
              experience as full stack developer, providing services for
              programming and design content needs.
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
      </Container>
    </ThemeProvider>
  );
};
export default HeroInformation;
