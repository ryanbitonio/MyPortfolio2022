import { TbMoonStars } from "react-icons/tb";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { HeroInformationContainer } from "../styles/HeroInformationContainer";
import { Information } from "../styles/Information";
import { Footer } from "../styles/Footer";

const HeroInformation = () => {
  return (
    <>
      <HeroInformationContainer>
        <TbMoonStars />
        <Information>
          <h1>Ryan Bitonio</h1>
          <h3>Developer and Designer</h3>
          <p>
            Freelancer basved from Bulacan, Philippines with 3+ years of
            experience as full stack developer, providing services for
            programming and design content needs.
          </p>
        </Information>
        <Footer>
          <img alt="" />
          <FaFacebookF />
          <h2>Facebook</h2>
          <FaGithub />
          <h2>Github</h2>
        </Footer>
      </HeroInformationContainer>
    </>
  );
};

export default HeroInformation;
