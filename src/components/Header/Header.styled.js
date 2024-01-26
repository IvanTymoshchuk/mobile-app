import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  @media screen and (min-width: 768px) {
    justify-content: space-around;
    padding: 16px 0;
    align-items: center;
    margin-top: 20px;
  }
  display: flex;
  background: linear-gradient(
    90deg,
    rgba(0, 197, 235, 0.3) -1.97%,
    rgba(181, 68, 254, 0.3) 89.43%
  );
  justify-content: space-around;
  padding: 16px 0;
  align-items: center;
  justify-content: space-between;
  padding: 20px 28px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderLogo = styled.a`
  color: #fff;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const Nav = styled.nav`
  @media screen and (max-width: 768px) {
    position: fixed;
    top: 0px;
    right: -100%;
    background-color: #07081c;
    color: #eee;
    width: 100%;
    height: 100vh;
    z-index: 100;
    transition: 0.5s;

    &.show {
      right: 0;
    }
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 36px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-top: 100px;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const NavItem = styled.li``;

export const NavLink = styled.a`
  color: white;
  text-align: center;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media screen and (min-width: 768px) {
    &:hover,
    &:focus {
      background: linear-gradient(90deg, #00c5eb -1.97%, #b544fe 89.43%);
      -webkit-background-clip: text;
      color: transparent;
      transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  @media screen and (max-width: 760px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  font-size: 24px;
  top: 18px;
  right: 24px;
  display: block;
  color: white;
  background-color: transparent;

  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }

  &:hover {
    background-color: red;
  }
`;

export const ToggleButton = styled.button`
  background-color: transparent;
  color: white;
  display: none;
  font-size: 24px;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    display: inline;
  }
`;
