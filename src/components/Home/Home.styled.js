import styled from '@emotion/styled';
import bg from '../img/hero/hero-tel.png';

export const Section = styled.section`
  background: #06071b;
  padding-top: 20px;
`;
export const Wrap = styled.div`
  position: relative;
  height: 430px;
`;
export const WrapBtn = styled.div`
  display: flex;
  justify-content: center;
`;

export const WrapBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export const WrapText = styled.div`
  position: absolute;
  padding-top: 100px;
  padding-left: 20px;
  padding-right: 20px;
`;
export const Title = styled.h1`
  color: #fff;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 12px;
`;
export const SubTitle = styled.h2`
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 28px;
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
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
  gap: 10px;
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
