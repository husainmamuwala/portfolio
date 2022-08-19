import React from 'react';

import { ButtonBack, Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi , i am <br />
          Husain Mamuwala
        </SectionTitle>
        <SectionText>
        The purpose of JavaScript Mastery is to help aspiring and established developers to take their development skills to the next level and build awesome apps.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;