import { NavSm } from '@Styles/header';
import { ButtonLink } from '@Styles/global';

export const NavbarSm = () => {
  return (
    <NavSm>
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
              fontSize: '1.8rem',
            }}
          >
            Projetos
          </ButtonLink>
        </li>
      </ul>
    </NavSm>
  );
};
