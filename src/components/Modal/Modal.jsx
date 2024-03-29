import { Nav, CloseButton } from '../Header/Header.styled';
import { SvgIcon } from 'components/Svg/Svg';

export const Modal = ({ isOpen, onClose, children }) => {
  return (
    <Nav id="nav-menu" className={isOpen ? 'show' : ''}>
      <CloseButton onClick={onClose}>
        <SvgIcon iconId="icon-close" width={32} height={32}></SvgIcon>
      </CloseButton>
      {children}
    </Nav>
  );
};
