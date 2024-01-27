import { Titles } from 'components/Title/Title';
import { SubTitles } from 'components/Title/SubTitle/SubTitle';
import {
  Section,
  WrapImg,
  List,
  Items,
  ItemsTitle,
  Paragraf,
} from './Fauteres.styled';
import fautures from '../img/fautures.png';
import nft from '../img/nft.png';

export const Fauteres = () => {
  return (
    <Section>
      <Titles text="KEY FEATURES" margin={40} />
      <SubTitles
        text="Get the best mobile experience with our Mobileapp. With a user-friendly interface, personalized recommendations, secure transactions, and real-time updates, our app offers everything you need to stay connected and productive"
        margin={40}
      />
      <WrapImg>
        <img src={fautures} alt="fautures" />
      </WrapImg>
      <List>
        <Items>
          <ItemsTitle>
            <img src={nft} alt="nft" width={28} height={28} />
            User-Friendly Interface:
          </ItemsTitle>
          <Paragraf>
            Intuitive and easy-to-navigate interface designed to provide a
            seamless mobile experience for users.
          </Paragraf>
        </Items>
        <Items>
          <ItemsTitle>
            <img src={nft} alt="nft" width={28} height={28} />
            Personalized Recommendations:
          </ItemsTitle>
          <Paragraf>
            Donec posuere augue venenatis, aliquet ligula ut, tempus quam.
            Vivamus diam a iaculis malesuada
          </Paragraf>
        </Items>
        <Items>
          <ItemsTitle>
            <img src={nft} alt="nft" width={28} height={28} />
            Real-Time Updates:
          </ItemsTitle>
          <Paragraf>
            Users receive real-time updates and notifications to stay informed
            on important news and events, and to stay up-to-date with changes to
            the app.
          </Paragraf>
        </Items>
        <Items>
          <ItemsTitle>
            <img src={nft} alt="nft" width={28} height={28} />
            Integration with Other Apps:
          </ItemsTitle>
          <Paragraf>
            The app integrates with other popular apps, making it easy for users
            to connect with their social media accounts, or to easily make
            in-app purchases using their preferred payment method.
          </Paragraf>
        </Items>
        <Items>
          <ItemsTitle>
            <img src={nft} alt="nft" width={28} height={28} />
            Multi-Language Support:
          </ItemsTitle>
          <Paragraf>
            The app is designed to be accessible to users all around the world,
            with support for multiple languages, making it easier for people to
            use the app in their native language.
          </Paragraf>
        </Items>
        <Items>
          <ItemsTitle>
            <img src={nft} alt="nft" width={28} height={28} />
            Offline Capabilities:
          </ItemsTitle>
          <Paragraf>
            The app offers offline capabilities, allowing users to access
            certain features and content even when they are not connected to the
            internet.
          </Paragraf>
        </Items>
      </List>
    </Section>
  );
};
