import { Title } from './Title.styled';

export const Titles = ({ text, margin, color }) => {
  return (
    <Title margin={margin} color={color}>
      {text}
    </Title>
  );
};
