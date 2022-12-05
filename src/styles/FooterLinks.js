import styled from "styled-components";

export const FooterLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 0 2rem;
  align-items: baseline;
  flex-direction: row;

  svg {
    transform: translateY(1%);
  }
`;

export const SocialMediaLabel = styled.h3`
  font-size: var(--h3Size);
  font-family: Acumin Pro Cond Thin, sans-serif;
  letter-spacing: 3px;
`;
