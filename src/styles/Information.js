import styled from "styled-components";

export const Information = styled.div`
  margin: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem 0;
`;

export const Title = styled.h1`
  font-size: var(--h1Size);
  font-family: Acumin Pro ExtraCond Bold, sans-serif;
  line-height: 9rem;
`;

export const Subtitle = styled.h2`
  font-size: var(--h2Size);
  font-family: Acumin Pro ExtraCond Light, sans-serif;
  font-weight: 100;
  letter-spacing: 2px;
  opacity: 95%;
  transform: translateY(-10%);
`;

export const Description = styled.p`
  font-size: var(--pSize);
  font-family: Acumin Pro Cond Thin, sans-serif;
  letter-spacing: 3px;
  opacity: 50%;
  font-weight: lighter;
`;
