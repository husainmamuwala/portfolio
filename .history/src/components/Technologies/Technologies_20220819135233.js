import React from 'react';
import { DiFirebase, DiReact, DiZend ,DiHtml5,DiCss3,DiJavascript1} from 'react-icons/di';
import {SiNextdotjs} from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Listboxy from '../listboxy/Listboxy';
import { List, ListContainer, ListContainernew, ListItem, ListItemnew, Listnew, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
      From Back-end To Design
    </SectionText>
    <Listnew>
      <ListItemnew>
      <picture>
        <DiHtml5 size="4rem"/>
      </picture>
      <ListContainernew>
      <ListTitle>HTML 5</ListTitle>
      </ListContainernew>
      </ListItemnew>
      <ListItemnew>
      <picture>
        <DiCss3 size="4rem"/>
      </picture>
      <ListContainernew>
      <ListTitle>CSS 3</ListTitle>
      </ListContainernew>
      </ListItemnew>
      <ListItemnew>
      <picture>
        <DiJavascript1 size="4rem"/>
      </picture>
      <ListContainernew>
      <ListTitle>JavaScript</ListTitle>
      </ListContainernew>
      </ListItemnew>
      <ListItemnew>
      <picture>
        
      </picture>
      <ListContainernew>
      <ListTitle>CSS 3</ListTitle>
      </ListContainernew>
      </ListItemnew>
    </Listnew>

    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
