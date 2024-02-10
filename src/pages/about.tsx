import Head from "next/head";

import * as Styled from "@/styles/page-styles/about.styles";
import { aboutMeCopy } from "@/copy/about.copy";

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
              <Styled.AboutMeParagraph>
                {aboutMeCopy.content[0]}
              </Styled.AboutMeParagraph>

              <Styled.AboutMeParagraph>
                {aboutMeCopy.content[1]}
              </Styled.AboutMeParagraph>

              <Styled.AboutMeSVG />

              <Styled.AboutMeParagraph>
                {aboutMeCopy.content[2]}
              </Styled.AboutMeParagraph>
            </Styled.AboutMeSection>
          </Styled.ContentWrapper>
        </Styled.AboutPageContainer>
      </main>
    </>
  );
};

export default AboutPage;
