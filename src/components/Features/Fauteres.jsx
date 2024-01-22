import { Titles } from 'components/Title/Title';
import { Section } from './Fauteres.styled';
import { SubTitles } from 'components/Title/SubTitle/SubTitle';

export const Fauteres = () => {
  return (
    <Section>
      <Titles text="KEY FEATURES" margin={40} />
      <SubTitles text="Get the best mobile experience with our Mobileapp. With a user-friendly interface, personalized recommendations, secure transactions, and real-time updates, our app offers everything you need to stay connected and productive" />
    </Section>
  );
};
