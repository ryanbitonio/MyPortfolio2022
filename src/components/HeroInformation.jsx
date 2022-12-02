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
          <h2>Developer and Designer</h2>
          <p>
            Freelancer based from Bulacan, Philippines with 3+ years of
            experience as full stack developer, providing services for
            programming and design content needs.
          </p>
        </Information>
        <Footer>
          <img alt="" />
          <FaFacebookF />
          <h3>Facebook</h3>
          <FaGithub />
          <h3>Github</h3>
        </Footer>
      </HeroInformationContainer>
    </>
  );
};

export default HeroInformation;
