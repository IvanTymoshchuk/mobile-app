import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: 40px;
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
    filter: blur(109.5px);
    z-index: -1;
  }
`;


