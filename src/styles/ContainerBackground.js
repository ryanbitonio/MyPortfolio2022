import styled from "styled-components";
import mainBackgroundTexture from "../assets/mainBackgroundTexture.png";
import mainBackgroundColor from "../assets/mainBackgroundColor.png";

export const ContainerBackground = styled.div`
  min-height: 100vh;
  background-image: url(${mainBackgroundTexture}), url(${mainBackgroundColor});
  background-blend-mode: soft-light;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
