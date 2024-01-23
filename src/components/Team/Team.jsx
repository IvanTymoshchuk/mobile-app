import { Titles } from 'components/Title/Title';
import one from '../img/team/1.png';
import two from '../img/team/2.png';
import three from '../img/team/3.png';
import four from '../img/team/4.png';

import { Section, Img, Item, List, Paragraf,ParagrafSec } from './Team.styled';
import { SubTitles } from 'components/Title/SubTitle/SubTitle';

export const Team = () => {
  return (
    <Section>
      <Titles text="OUR TEAM" margin={24} />
      <SubTitles
        text="Our team is made up of talented and passionate individuals who are committed to providing the best experience for our users. Each member brings a unique set of skills and expertise to the table, allowing us to work collaboratively and effectively to achieve our goals."
        margin={28}
      />
      <List>
        <Item>
          <Img src={one} alt="one" />
          <Paragraf>David Patel</Paragraf>
          <ParagrafSec>Managing Direcor</ParagrafSec>
        </Item>
        <Item>
          <Img src={two} alt="two" />
          <Paragraf>Rachel Kim</Paragraf>
          <ParagrafSec>Lead Designer</ParagrafSec>
        </Item>
        <Item>
          <Img src={three} alt="three" />
          <Paragraf>Samantha Chen</Paragraf>
          <ParagrafSec>Lead Developer</ParagrafSec>
        </Item>
        <Item>
          <Img src={four} alt="four" />
          <Paragraf>Andrew Nguyen</Paragraf>
          <ParagrafSec>Sr. UI Designer</ParagrafSec>
        </Item>
      </List>
    </Section>
  );
};
