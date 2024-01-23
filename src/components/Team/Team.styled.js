import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: 40px;
  padding-left: 15px;
  padding-right: 15px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      #00c5eb,
      #3d99f1 44.79%,
      rgba(181, 68, 254, 1) 100%
    );
    filter: blur(500px);
    z-index: -1;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 413px;
  border-radius: 15px;
  background: linear-gradient(
      313deg,
      rgba(0, 197, 235, 0.5) -0.2%,
      rgba(181, 68, 254, 0.5) 112.66%
    ),
    #06071b;
  backdrop-filter: blur(17.5px);
`;
export const Img = styled.img`
  width: 248px;
  height: 303px;
  margin-bottom: 24px;
`;
export const Paragraf = styled.p`
  margin-bottom: 12px;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
`;
export const ParagrafSec = styled.p`
  color: #fff;
  font-size: 14px;
  line-height: 24px;
`;
