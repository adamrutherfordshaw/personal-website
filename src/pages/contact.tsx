import Head from "next/head";

import * as Styled from "@/styles/page-styles/contact.styles";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta
          name="description"
          content="Software Developer near Manchester, UK"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Styled.ContactPageContainer>
          <Styled.Heading>Contact Me</Styled.Heading>
          <Styled.ContentWrapper>
            <Styled.ContactMeSection>
              <Styled.ContactMeParagraph>
                Fancy a chat? I&apos;m always happy to talk tech and new
                opportunities.
              </Styled.ContactMeParagraph>

              <Styled.ContactMeParagraph>
                If you&apos;d like to get in touch, or want to nosy at other
                work I&apos;ve done, find me on one of the socials below.
              </Styled.ContactMeParagraph>

              <Styled.SVGSocialContainer>
                <Styled.SocialsContainer>
                  <Styled.SocialLink
                    href="https://www.linkedin.com/in/adamrutherfordshaw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Styled.LinkedInLogo />
                  </Styled.SocialLink>

                  <Styled.SocialLink
                    href="https://github.com/adamrutherfordshaw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Styled.GitHubLogo />
                  </Styled.SocialLink>
                </Styled.SocialsContainer>

                <Styled.FocusSVG />
              </Styled.SVGSocialContainer>

              <Styled.ContactMeParagraph>
                Or drop me an email at{" "}
                <Styled.EmailLink href="mailto:hello@adamrutherford.dev">
                  hello@adamrutherford.dev
                </Styled.EmailLink>
              </Styled.ContactMeParagraph>
            </Styled.ContactMeSection>
          </Styled.ContentWrapper>
        </Styled.ContactPageContainer>
      </main>
    </>
  );
};

export default ContactPage;
