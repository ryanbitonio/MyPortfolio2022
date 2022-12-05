import styled from "styled-components";
import backgroundTexture from "../assets/backgroundTexture.png";

export const Container = styled.div`
  background-color: ${props => props.theme.background};
  background-image: url(${backgroundTexture});
  background-blend-mode: soft-light;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${props => props.theme.color};
  transition: all 0.3s ease;

  svg {
    color: ${props => props.theme.color};
  }
`;

export default Container;
