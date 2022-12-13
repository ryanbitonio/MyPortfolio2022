import styled from "styled-components";

export const Page = styled.div`
  min-height: 100vh;
  display: flex;

  flex-direction: column;
  justify-content: center;
  gap: 0.67rem;
`;

export const Home = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  padding: 6.7rem 25rem;
  background-color: ${props => props.theme.boxColor};
  mix-blend-mode: ${props => props.theme.blend};
`;

export const Skills = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  padding: 6.7rem 25rem;
  background-color: ${props => props.theme.boxColor};
  mix-blend-mode: ${props => props.theme.blend};
`;
export const Portfolio = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  padding: 6.7rem 25rem;
  background-color: ${props => props.theme.boxColor};
  mix-blend-mode: ${props => props.theme.blend};
`;
export const Contact = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  padding: 6.7rem 25rem;
  background-color: ${props => props.theme.boxColor};
  mix-blend-mode: ${props => props.theme.blend};
`;
