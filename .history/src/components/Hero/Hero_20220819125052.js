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
        A Passoinate Developer that will try his level best to get your project done at the cheapest !
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;