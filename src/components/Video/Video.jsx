import { SubTitles } from 'components/Title/SubTitle/SubTitle';
import { Titles } from 'components/Title/Title';
import { SvgIcon } from 'components/Svg/Svg';
import { Section, WrapBtn, Btn } from './Video.styled';
import video from '../img/video.png';

export const Video = () => {
  return (
    <Section>
      <Titles text="WATCH THE VIDEO" color="#FFF" margin={24} />
      <SubTitles
        text="Watch the video below to see our mobile app in action. With a user-friendly interface, personalized recommendations, secure transactions, and real-time updates, our app is available for download on both Apple and Android devices and is designed to make your life easier."
        color="#FFF"
        margin={24}
      />
      <WrapBtn>
        <Btn type="submit">
          <SvgIcon iconId="icon-facebook" width={20} height={20} />
        </Btn>
        <Btn type="submit">
          <SvgIcon iconId="icon-LinkedIn" width={20} height={20} />
        </Btn>
      </WrapBtn>
      <div>
        <img src={video} alt="video" />
      </div>
    </Section>
  );
};
