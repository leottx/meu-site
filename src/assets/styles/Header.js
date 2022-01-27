import styled from 'styled-components';

export const Container = styled.header`
  position: sticky;
  padding: 2rem;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: var(--primary-color);
  /* @media only screen and (min-width: 40em) {
    box-shadow: 0 3px 5px rgba($color: c.$black, $alpha: 0.2);
    height: auto !important;
  } */
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

export const LogoIcon = styled.div`
  color: var(--primary-color);
  background: rgba(255, 255, 255, 1);
  display: block;
  width: 40px;
  display: flex;
  justify-content: center;
  border-radius: 0.6rem;
  height: 40px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  svg {
    width: 36px;
    height: auto;
  }
`;

export const LogoText = styled.p`
  color: var(--white);
  font-family: 'Montserrat';
  text-transform: uppercase;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  span {
    line-height: 1;
    display: block;
    &:first-child {
      font-size: 2.4rem;
      font-weight: 700;
    }
    &:last-child {
      font-size: 1.6rem;
      font-weight: 500;
    }
  }
`;

export const Hamburguer = styled.button`
  color: var(--white);
  font-family: 'Nunito';
  font-weight: 800;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 1.8rem;
  background: var(--primary-color-tint);
  border-radius: 1.2rem;
  border: none;
  outline-offset: 2px;
  outline: 3px dotted transparent;
  transition: all 0.2s;
  &:hover {
    outline: 3px dotted var(--primary-color-shade);
    background: var(--primary-color-shade);
  }
`;

export const NavSm = styled.nav`
  font-family: 'Nunito', sans-serif;
  font-size: 1.8rem;
  font-weight: 800;
  margin-top: 2rem;
  li {
    display: flex;
    border-bottom: 2px dashed rgba(250, 250, 250, 0.15);
    padding: 1rem 0;
    &:last-child {
      border: none;
      padding: 2rem 0 0;
    }
  }
  a {
    color: var(--white);
  }
`;

export const ProjectBtn = styled.a`
  padding: 1rem 1.8rem;
  background: var(--primary-color-tint);
  border-radius: 1.2rem;
  outline-offset: 2px;
  outline: 3px dotted transparent;
  transition: all 0.2s;
  &:hover {
    outline: 3px dotted var(--primary-color-shade);
    background: var(--primary-color-shade);
  }
`;

export const NavLg = styled.nav``;
