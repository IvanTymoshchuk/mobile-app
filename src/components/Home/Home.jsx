import { Header } from 'components/Header/Header';
import {
  Items,
  Section,
  SubTitle,
  Title,
  Wrap,
  WrapText,
  Button,
  List,
  WrapBackground,
  WrapBtn,
  WrapImgTab,
} from './Home.styled';
import { SvgIcon } from 'components/Svg/Svg';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import hero from '../img/hero/hero.png';

export const HomeComp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <Section>
      <Header />
      <Wrap>
        <WrapImgTab>
          <img src={hero} alt="hero" width="362px" height="352px" />
        </WrapImgTab>
        <WrapBackground />
        <WrapText>
          <Title>Introducing Mobileapp</Title>
          <SubTitle>Download our mobile app today!</SubTitle>
          <List>
            <Items>
              <SvgIcon width={18} height={18} iconId="icon-arrow-right" />
              Real-time updates and notifications for timely information
            </Items>
            <Items>
              <SvgIcon width={18} height={18} iconId="icon-arrow-right" />
              Robust analytics and reporting for data-driven insights
            </Items>
            <Items>
              <SvgIcon width={18} height={18} iconId="icon-arrow-right" />
              Offline capabilities for uninterrupted use
            </Items>
          </List>
          <WrapBtn>
            {' '}
            <Button onClick={toggleMenu}>Download</Button>
          </WrapBtn>
          <Modal isOpen={isMenuOpen} onClose={toggleMenu}>
            <h2>work</h2>
          </Modal>
        </WrapText>
      </Wrap>
    </Section>
  );
};
