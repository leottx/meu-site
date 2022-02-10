import { NavLg } from '@Styles/header';
import { ButtonLink } from '@Styles/global';

export const NavbarLg = () => {
  return (
    <NavLg>
      <ul>
        <li>
          <a href='#'>Sobre</a>
        </li>
        <li>
          <a href='#'>Artigos</a>
        </li>
        <li>
          <a href='#'>Contato</a>
        </li>
        <li>
          <ButtonLink
            href='#'
            theme={{
              color: 'var(--primary-color-tint)',
              shade: 'var(--primary-color-shade)',
              fontSize: '1.8rem',
            }}
          >
            Projetos
          </ButtonLink>
        </li>
      </ul>
    </NavLg>
  );
};
