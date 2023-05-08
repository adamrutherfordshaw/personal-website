import Head from "next/head";

import * as Styled from "@/styles/page-styles/about.styles";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta
          name="description"
          content="Software Developer near Manchester, UK"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Styled.AboutPageContainer>
          <Styled.Heading>About Me</Styled.Heading>
          <Styled.ContentWrapper>
            <Styled.AboutMeSection>
              {/* <Styled.AboutMeParagraph>
              I&apos;m a front-end developer based near Manchester, UK.
            </Styled.AboutMeParagraph> */}

              <Styled.AboutMeParagraph>
                After finishing my A-Levels, to fulfil my passion for technology
                and computer science, I decided to pursue a career in software
                engineering. I did this by completing a software developer
                apprenticeship working in partnership with Manchester Digital.
                Since then, I have continued my career as a professional
                developer, responsible for creating and maintaining digital
                products for a FTSE 100 company.
              </Styled.AboutMeParagraph>

              <Styled.AboutMeSVG />

              <Styled.AboutMeParagraph>
                During my time as a professional developer, I&apos;ve gained
                experience through exposure to a wide range of technologies and
                frameworks, including React, Next, TypeScript, Node, GraphQL,
                and more.
              </Styled.AboutMeParagraph>

              {/* <Styled.TechnologiesList>
              <Styled.TechnologiesListItem>React</Styled.TechnologiesListItem>
              <Styled.TechnologiesListItem>Next</Styled.TechnologiesListItem>
              <Styled.TechnologiesListItem>
              TypeScript
              </Styled.TechnologiesListItem>
              <Styled.TechnologiesListItem>
              Styled Components
              </Styled.TechnologiesListItem>
              <Styled.TechnologiesListItem>Next</Styled.TechnologiesListItem>
              <Styled.TechnologiesListItem>Next</Styled.TechnologiesListItem>
            </Styled.TechnologiesList> */}
            </Styled.AboutMeSection>
          </Styled.ContentWrapper>
          {/* <Styled.Intro>
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
          </Styled.Intro> */}
        </Styled.AboutPageContainer>
      </main>
    </>
  );
};

export default AboutPage;
