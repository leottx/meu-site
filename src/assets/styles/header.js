import styled from 'styled-components';

export const Container = styled.header`
  padding: 1.6rem 2rem 2rem;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: var(--primary-color);
  @media only screen and (min-width: 640px) {
    padding: 2rem 3.6rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1536px;
  margin: 0 auto;
  @media only screen and (min-width: 740px) {
    > button {
      display: none;
    }
  }
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
      // 26px @320px increasing to 30px @1460px
      font-size: clamp(
        1.625rem * 1.6,
        1.5548245614035088rem * 1.6 + 0.3508771929824561vw,
        1.875rem * 1.6
      );
      font-weight: 700;
    }
    &:last-child {
      // 18px @320px increasing to 22px @1460px
      font-size: clamp(
        1.125rem * 1.6,
        1.0548245614035088rem * 1.6 + 0.3508771929824561vw,
        1.375rem * 1.6
      );
      font-weight: 500;
    }
  }
`;

export const NavSm = styled.nav`
  font-family: 'Nunito', sans-serif;
  // 18px @320px increasing to 22px @1460px
  font-size: clamp(
    1.125rem * 1.6,
    1.0548245614035088rem * 1.6 + 0.3508771929824561vw,
    1.375rem * 1.6
  );
  font-weight: 800;
  margin-top: 2rem;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
  li {
    display: flex;
    border-bottom: 2px dashed rgba(250, 250, 250, 0.15);
    padding: 1rem 0;
    &:last-child {
      border: none;
      padding: 1.6rem 0 0;
    }
  }
  a {
    color: var(--white);
  }
  @media only screen and (min-width: 740px) {
    display: none;
  }
`;

export const NavLg = styled.nav`
  // 18px @320px increasing to 22px @1460px
  font-size: clamp(
    1.125rem * 1.6,
    1.0548245614035088rem * 1.6 + 0.3508771929824561vw,
    1.375rem * 1.6
  );
  font-weight: 800;
  font-family: 'Nunito', sans-serif;
  display: none;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
  ul {
    display: flex;
    align-items: center;
    gap: 3.2rem;
  }
  a {
    color: var(--white);
  }
  @media only screen and (min-width: 740px) {
    display: initial;
  }
`;
