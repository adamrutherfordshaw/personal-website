import styled from "styled-components";
import { DeveloperAtComputer } from "../pictogram/content/DeveloperAtComputer";
import { DotIcon } from "../icon/content/dot";

export const HoldingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 32px;
  gap: 32px;
`;

export const Intro = styled.div`
  max-width: 1200px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 37.5em) {
    flex-direction: row;
  }
`;

export const Header = styled.header``;

export const Heading = styled.h1`
  display: flex;
  flex-direction: column;
  text-align: center;

  span:nth-child(1) {
    font-size: 1.5rem;
    font-weight: 300;
  }

  span:nth-child(2) {
    font-size: 3rem;
    font-weight: 400;
  }
`;

export const Dot = styled(DotIcon)`
  fill: ${({ theme }) => theme.backgroundColour.dark};
`;

export const BriefParagraph = styled.p`
  margin-top: 12px;
  margin-bottom: 24px;
  text-align: center;
`;

export const IntroSVG = styled(DeveloperAtComputer)`
  width: 90%;
  height: auto;
  aspect-ratio: 4/3;
`;
