import styled from "styled-components";

import { DeveloperAtComputer } from "@/components/pictogram/content/DeveloperAtComputer";
import { DotIcon } from "@/components/icon/content/dot";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${({ theme }) => theme.spacing.four};
  gap: ${({ theme }) => theme.spacing.four};
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
  fill: ${({ theme }) => theme.colour.text.accent};
`;

export const BriefParagraph = styled.p`
  margin-top: ${({ theme }) => theme.spacing.two};
  margin-bottom: ${({ theme }) => theme.spacing.three};
  text-align: center;
`;

export const IntroSVG = styled(DeveloperAtComputer)`
  width: 90%;
  height: auto;
  aspect-ratio: 4/3;
`;
