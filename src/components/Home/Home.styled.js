import styled from '@emotion/styled';
import bg from '../img/hero/hero-tel.png';
import bgTab from '../img/iPhone.png';

export const Section = styled.section`
  background: #06071b;
  padding-top: 20px;
`;
export const Wrap = styled.div`
  position: relative;
  height: 430px;
`;
export const WrapImgTab = styled.div`
  display: none;
  @media screen and (min-width: 760px) {
    display: block;
    position: absolute;
    right: 190px;
    top: 160px;
  }
`;
export const WrapBtn = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (min-width: 760px) {
    justify-content: flex-start;
  }
`;

export const WrapBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  @media screen and (max-width: 760px) {
    top: 0;
    left: 0;
    opacity: 0.5;
    background-image: url(${bg});
  }
  @media screen and (min-width: 760px) {
    background-image: url(${bgTab});
    width: 307px;
    height: 329px;
    right: 32px;
    top: 140px;
  }
`;

export const WrapText = styled.div`
  position: absolute;
  padding-top: 100px;
  padding-left: 20px;
  padding-right: 20px;
  @media screen and (min-width: 760px) {
    padding-top: 60px;
    padding-left: 32px;
    padding-right: 32px;
  }
`;
export const Title = styled.h1`
  color: #fff;
  font-size: 24px;
  line-height: normal;
  margin-bottom: 12px;
  @media screen and (min-width: 760px) {
    font-size: 40px;
  }
`;
export const SubTitle = styled.h2`
  color: #fff;
  font-size: 14px;
  line-height: normal;
  margin-bottom: 28px;
  @media screen and (min-width: 760px) {
    font-size: 20px;
  }
`;
export const List = styled.ul`
  display: flex;
  gap: 10px;
  margin-bottom: 40px;
  flex-direction: column;
`;
export const Items = styled.li`
  color: #fff;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  @media screen and (min-width: 760px) {
    font-size: 14px;
  }
`;
export const Button = styled.button`
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  width: 200px;
  height: 42px;
  border-radius: 5px;
  background: linear-gradient(90deg, #00c5eb -1.97%, #b544fe 89.43%);
`;
