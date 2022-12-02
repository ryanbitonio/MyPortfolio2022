import styled from "styled-components";

export const HeroInformationContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 60% 0 8%;

  svg {
    font-size: 1.5rem;
  }

  h1 {
    font-size: var(--h1Size);
    font-family: GlendaleBold, sans-serif;
  }

  h2 {
    font-size: var(--h2Size);
    font-family: GlendaleRegular, sans-serif;
    font-weight: 100;
    letter-spacing: 2px;
    opacity: 95%;
  }

  h3 {
    font-size: var(--h3Size);
    font-family: Dirtyline, sans-serif;
    letter-spacing: 3px;
  }

  p {
    font-size: var(--pSize);
    font-family: GlendaleLight, sans-serif;
    letter-spacing: 3px;
    opacity: 50%;
  }
`;
