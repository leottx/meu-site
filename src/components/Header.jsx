import { useState } from 'react';
import { NavbarSm } from '@Components/NavbarSm';
import { NavbarLg } from '@Components/NavbarLg';

// ICONES
import { FaHamburger } from 'react-icons/fa';

// ESTILOS
import { Container, Wrapper, LogoLink, LogoText } from '@Styles/header';

import { Button } from '@Styles/global';

export const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <Container className='grow'>
      <Wrapper>
        <LogoLink>
          <LogoText>
            <span>Leo</span>
            <span>Dev</span>
          </LogoText>
        </LogoLink>
        <Button
          theme={{
            color: 'var(--primary-color-tint)',
            shade: 'var(--primary-color-shade)',
            fontSize: '1.8rem',
          }}
          onClick={handleShowMobileMenu}
        >
          <span>Menu</span>
          <FaHamburger />
        </Button>
        <NavbarLg />
      </Wrapper>
      {showMobileMenu && <NavbarSm />}
    </Container>
  );
};
