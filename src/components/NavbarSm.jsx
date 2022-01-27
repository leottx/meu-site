import { NavSm, ProjectBtn } from '@Styles/Header';

export const NavbarSm = () => {
  return (
    <NavSm>
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
          <ProjectBtn href='#'>Projetos</ProjectBtn>
        </li>
      </ul>
    </NavSm>
  );
};
