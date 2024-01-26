// Header.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  HeaderContainer,
  Logo,
  HeaderLogo,
  NavList,
  NavItem,
  NavLink,
  ToggleButton,
} from './Header.styled';
import { SvgIcon } from 'components/Svg/Svg';
import { Modal } from 'components/Modal/Modal';

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

      <Modal isOpen={isMenuOpen} onClose={toggleMenu}>
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
      </Modal>

      <ToggleButton onClick={toggleMenu}>
        <SvgIcon width={24} height={24} iconId="icon-Burger"></SvgIcon>
      </ToggleButton>
    </HeaderContainer>
  );
};

export default Header;
