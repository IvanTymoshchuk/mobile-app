import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
  background: linear-gradient(
    90deg,
    rgba(0, 197, 235, 0.3) -1.97%,
    rgba(181, 68, 254, 0.3) 89.43%
  );
  @media screen and (min-width: 760px) {
    padding: 14px 32px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderLogo = styled.a`
  color: #fff;
  font-size: 28px;
`;

export const Nav = styled.nav`
  @media screen and (max-width: 760px) {
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
  @media screen and (max-width: 760px) {
    flex-direction: column;
    padding-top: 100px;
  }
  @media screen and (min-width: 760px) {
    flex-direction: row;
  }
`;

export const NavItem = styled.li``;

export const NavLink = styled.a`
  color: #fff;
  font-size: 32px;
  line-height: normal;
  &:hover,
  &:focus {
    background: linear-gradient(90deg, #00c5eb -1.97%, #b544fe 89.43%);
    -webkit-background-clip: text;
    color: transparent;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media screen and (max-width: 760px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: 760px) {
    font-size: 12px;
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
  @media screen and (min-width: 760px) {
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

  @media screen and (max-width: 767px) {
    display: inline;
  }
`;
