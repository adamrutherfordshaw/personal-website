import { GitHubIcon } from "@/components/icon/content/github";
import { LinkedInIcon } from "@/components/icon/content/linkedin";
import { DeveloperFocussing } from "@/components/pictogram/content/DeveloperFocussing";
import Link from "next/link";
import styled from "styled-components";

export const ContactPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${({ theme }) => theme.spacing.four};
  gap: ${({ theme }) => theme.spacing.four};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.h1`
  text-align: center;
  font-weight: 400;
`;

export const ContactMeSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.four};
  font-size: 1.25rem;
  width: min(60ch, 100%);
  margin: 0 auto;

  text-align: center;
`;

export const ContactMeParagraph = styled.p``;

export const FocusSVG = styled(DeveloperFocussing)`
  width: 90%;
  height: auto;
  aspect-ratio: 5/2;
  align-self: center;
`;

export const SVGSocialContainer = styled.div``;

export const SocialsContainer = styled.div`
  display: flex;
  justify-content: space-around;

  @media (min-width: 37.5em) {
    margin-bottom: -70px;
  }
`;

export const SocialLink = styled(Link)`
  display: flex;
`;

export const LinkedInLogo = styled(LinkedInIcon)``;

export const GitHubLogo = styled(GitHubIcon)``;

export const EmailLink = styled(Link)`
  text-decoration: none;
`;
