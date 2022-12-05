// React
import React from "react";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

// React Icons
import { FaFacebookMessenger } from "react-icons/fa";
import { ImGithub } from "react-icons/im";

// Assets
import Moon from "../assets/icons/Moon";
import Sun from "../assets/icons/Sun";

// Components
import { Content } from "../styles/Content";
import { Footer, Icon } from "../styles/Footer";
import { FooterLinks, SocialMediaLabel } from "../styles/FooterLinks";
import Container from "../styles/Container";
import Switch from "../components/Switch";

// Images
import pictureIcon from "../assets/pictureIcon.png";

// Styles
import {
  Description,
  Information,
  Subtitle,
  Title,
} from "../styles/Information";
import Toggle from "../styles/Toggle";
import { Home, Skills, Portfolio, Contact, Page } from "../styles/Page";

// Themes
import darkTheme from "../themes/dark";
import lightTheme from "../themes/light";

const HeroInformation = () => {
  // Toggle Switch
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
        <Page>
          <Home></Home>
          <Skills></Skills>
          <Portfolio></Portfolio>
          <Contact></Contact>
        </Page>
      </Container>
    </ThemeProvider>
  );
};
export default HeroInformation;
