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
  WrapBackground
} from './Home.styled';
import { SvgIcon } from 'components/Svg/Svg';

export const HomeComp = () => {
  return (
    <Section>
      <Header />
      <Wrap>
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
          <Button>Download</Button>
        </WrapText>
      </Wrap>
    </Section>
  );
};
