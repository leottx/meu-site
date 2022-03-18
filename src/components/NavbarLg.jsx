import { NavLg } from '@Styles/header';
import { ButtonLink } from '@Styles/global';

export const NavbarLg = () => {
  return (
    <NavLg>
      <ul>
        <li>
          <a href="#sobre">Sobre</a>
        </li>
        <li>
          <a href="#artigos">Artigos</a>
        </li>
        <li>
          <a href="#contato">Contato</a>
        </li>
        <li>
          <ButtonLink
            href="#portfolio"
            theme={{
              color: 'var(--primary-color-tint)',
              shade: 'var(--primary-color-shade)',
              fontSize: `clamp(
                1.125rem * 1.6,
                1.0548245614035088rem * 1.6 + 0.3508771929824561vw,
                1.375rem * 1.6
              )`,
            }}
          >
            Projetos
          </ButtonLink>
        </li>
      </ul>
    </NavLg>
  );
};
