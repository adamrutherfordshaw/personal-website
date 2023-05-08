import { DeveloperByLaptop } from "@/components/pictogram/content/DeveloperByLaptop";
import styled from "styled-components";

export const AboutPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 32px;
  gap: 32px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.h1`
  text-align: center;
  font-weight: 400;
`;

export const AboutMeSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  font-size: 1.25rem;
  width: min(60ch, 100%);
`;

export const AboutMeParagraph = styled.p``;

export const AboutMeSVG = styled(DeveloperByLaptop)`
  width: 90%;
  height: auto;
  aspect-ratio: 5/2;
  align-self: center;
`;

export const TechnologiesList = styled.ul``;

export const TechnologiesListItem = styled.li``;
