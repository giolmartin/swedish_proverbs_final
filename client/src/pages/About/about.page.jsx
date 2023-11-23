import React from 'react';
import { AboutContainer, Heading, StyledParagraph } from './about.style';

const AboutPage = () => {
  return (
    <AboutContainer>
      <Heading>About Svenska Sayings</Heading>
      <StyledParagraph>
        Welcome to Svenka Sayings, a delightful journey into the heart of
        Swedish language and culture! Our mission is to bring the fun and whimsy
        of Swedish sayings right to your fingertips. Whether you're a language
        enthusiast, a curious explorer, or someone who enjoys the quirks and
        idiosyncrasies of different cultures, you've come to the right place.
      </StyledParagraph>
      <StyledParagraph>
        Svenka Sayings is more than just a translation site; it's an invitation
        to explore the charming and often humorous world of Swedish expressions.
        From classic proverbs that have been passed down through generations to
        colloquial expressions used in everyday conversation, each phrase opens
        a window into the Swedish way of life.
      </StyledParagraph>
      <StyledParagraph>
        So why wait? You might even find yourself chuckling at some of the
        translations! Let's explore the beauty of the Swedish language together,
        one saying at a time.
      </StyledParagraph>
    </AboutContainer>
  );
};

export default AboutPage;
