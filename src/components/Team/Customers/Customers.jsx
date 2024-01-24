import { Titles } from 'components/Title/Title';
import custumers from '../../img/custumers.png';
import { WrapImg, WrapText, Paragraf, Span } from './Customers.styled';
import { SubTitles } from 'components/Title/SubTitle/SubTitle';

export const Customers = () => {
  return (
    <>
      <Titles text="WHAT OUR COSTUMER’S SAY" margin={40} />
      <WrapImg>
        <img src={custumers} alt="custumers" width="181px" height="181px" />
      </WrapImg>
      <WrapText>
        <Paragraf>Jon Doe</Paragraf>
        <Span>Company Inc.</Span>
        <SubTitles
          text="I've been using this app for a few weeks now and I have to say, I'm really impressed. It's so easy to use and the personalized recommendations are spot-on. Plus, the transactions are secure and the updates are always timely. I would definitely recommend this app to anyone looking for a better mobile experience."
          margin={80}
        />
      </WrapText>
    </>
  );
};
