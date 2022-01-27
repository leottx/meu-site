import { useState } from 'react';
import { NavbarSm } from '@Components/NavbarSm';

// ICONES
import { MdAdsClick } from 'react-icons/md';
import { FaHamburger } from 'react-icons/fa';

// ESTILOS
import {
  Container,
  Wrapper,
  LogoLink,
  LogoIcon,
  LogoText,
  Hamburguer,
} from '@Styles/Header';

export const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <Container className='grow'>
      <Wrapper>
        <LogoLink>
          <LogoIcon>
            <MdAdsClick />
          </LogoIcon>
          <LogoText>
            <span>Leo</span>
            <span>Dev</span>
          </LogoText>
        </LogoLink>
        <Hamburguer onClick={handleShowMobileMenu}>
          <span>Menu</span>
          <FaHamburger />
        </Hamburguer>
      </Wrapper>
      {showMobileMenu && <NavbarSm />}
    </Container>
  );
};
