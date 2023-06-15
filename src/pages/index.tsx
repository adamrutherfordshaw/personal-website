import Head from "next/head";

import { Schema } from "@/components/schema/schema";

import * as Styled from "@/styles/page-styles/home.styles";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Adam Rutherford-Shaw - Front End Developer</title>
        <meta
          name="description"
          content="Software Developer near Manchester, UK"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Schema
          schema={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Adam Rutherford-Shaw",
            url: "https://www.adamrutherford.dev",
          }}
        />
        <Styled.HomePageContainer>
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
        </Styled.HomePageContainer>
      </main>
    </>
  );
};

export default HomePage;
