import styled from "styled-components";
import backgroundTexture from "../assets/backgroundTexture.png";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: url(${backgroundTexture});
  background-color: ${props => props.theme.background};
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
