import { SubTitle } from './SubTitle.styled';

export const SubTitles = ({ text, margin, color }) => {
  return (
    <SubTitle margin={margin} color={color}>
      {text}
    </SubTitle>
  );
};
