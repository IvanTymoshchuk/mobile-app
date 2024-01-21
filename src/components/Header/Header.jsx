import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  HeaderContainer,
  Logo,
  HeaderLogo,
  Nav,
  NavList,
  NavItem,
  NavLink,
  CloseButton,
  ToggleButton,
} from './Header.styled';
import { SvgIcon } from 'components/Svg/Svg';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = to => {
    navigate(to);
    setIsMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <Logo>
        <HeaderLogo onClick={() => handleNavLinkClick('/')}>
          Mobileapp
        </HeaderLogo>
      </Logo>

      <Nav id="nav-menu" className={isMenuOpen ? 'show' : ''}>
        <CloseButton onClick={toggleMenu}>
          <SvgIcon iconId="icon-close" width={20} height={20}></SvgIcon>
        </CloseButton>
        <NavList>
          <NavItem>
            <NavLink onClick={() => handleNavLinkClick('/')}>HOME</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => handleNavLinkClick('/catalog')}>
              FEATURES
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => handleNavLinkClick('/favorite')}>
              TEAM
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => handleNavLinkClick('/favorite')}>
              TESTIMONIALS
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => handleNavLinkClick('/favorite')}>
              CONTACT
            </NavLink>
          </NavItem>
        </NavList>
      </Nav>
      <ToggleButton onClick={toggleMenu}>
        <SvgIcon width={20} height={20} iconId="icon-Burger"></SvgIcon>
      </ToggleButton>
    </HeaderContainer>
  );
};

export default Header;
