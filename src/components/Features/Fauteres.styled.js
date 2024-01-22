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

export const WrapImg = styled.div`
  margin-bottom: 47px;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 42px;
  margin-bottom: 40px;
`;

export const Items = styled.li``;

export const ItemsTitle = styled.h3`
  color: #000;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  margin-bottom: 12px;
`;
export const Paragraf = styled.p`
  width: 241px;
  color: #000;
  font-size: 12px;
  line-height: normal;
`;
