import * as Styled from "./holding-page.styles";

export const HoldingPage = () => {
  return (
    <Styled.HoldingPageContainer>
      <Styled.Intro>
        <Styled.Header>
          <Styled.Heading>
            <span>Hey 👋</span>
            <span>
              I&apos;m Adam
              <Styled.Dot />
            </span>
          </Styled.Heading>

          <Styled.BriefParagraph>
            I&apos;m a front-end developer based near Manchester, UK.
          </Styled.BriefParagraph>
        </Styled.Header>

        <Styled.IntroSVG />
      </Styled.Intro>
    </Styled.HoldingPageContainer>
  );
};
