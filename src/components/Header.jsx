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
    <Container className="grow">
      <Wrapper>
        <LogoLink href="https://leonardotx.com.br">
          <LogoText>
            <span>Leo</span>
            <span>Dev</span>
          </LogoText>
        </LogoLink>
        <Button
          theme={{
            color: 'var(--primary-color-tint)',
            shade: 'var(--primary-color-shade)',
            fontSize: `clamp(
              1.125rem * 1.6,
              1.0548245614035088rem * 1.6 + 0.3508771929824561vw,
              1.375rem * 1.6
            )`,
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
