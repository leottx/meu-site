import { createGlobalStyle, css } from 'styled-components';
import styled from 'styled-components';
import { tint } from 'polished';

// Fonts
import NunitoLight from '@Fonts/Nunito-Light.ttf';
import NunitoRegular from '@Fonts/Nunito-Regular.ttf';
import NunitoSemibold from '@Fonts/Nunito-SemiBold.ttf';
import NunitoMedium from '@Fonts/Nunito-Medium.ttf';
import NunitoBold from '@Fonts/Nunito-Bold.ttf';
import NunitoExtraBold from '@Fonts/Nunito-ExtraBold.ttf';
import PTSerifBold from '@Fonts/PTSerif-Bold.ttf';
import PTSerifRegular from '@Fonts/PTSerif-Regular.ttf';
import PTSerifBoldItalic from '@Fonts/PTSerif-BoldItalic.ttf';
import PTSerifRegularItalic from '@Fonts/PTSerif-Italic.ttf';
import MontserratBold from '@Fonts/Montserrat-Bold.ttf';
import MontserratMedium from '@Fonts/Montserrat-Medium.ttf';

export const GlobalStyles = createGlobalStyle`
  // Montserrat
  @font-face {
    src: ${`url(${MontserratBold}) format('truetype')`};
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
  }
  @font-face {
    src: ${`url(${MontserratMedium}) format('truetype')`};
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
  }
  // Nunito
  @font-face {
    src: ${`url(${NunitoLight}) format('truetype')`};
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 300;
  }
  @font-face {
    src: ${`url(${NunitoRegular}) format('truetype')`};
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
  }
  @font-face {
    src: ${`url(${NunitoMedium}) format('truetype')`};
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 500;
  }
  @font-face {
    src: ${`url(${NunitoSemibold}) format('truetype')`};
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
  }
  @font-face {
    src: ${`url(${NunitoBold}) format('truetype')`};
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
  }
  @font-face {
    src: ${`url(${NunitoExtraBold}) format('truetype')`};
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 800;
  }
  // PTSerif
  @font-face {
    src: ${`url(${PTSerifBold}) format('truetype')`};
    font-family: 'PTSerif';
    font-style: normal;
    font-weight: 700;
  }
  @font-face {
    src: ${`url(${PTSerifRegular}) format('truetype')`};
    font-family: 'PTSerif';
    font-style: normal;
    font-weight: 400;
  }
  @font-face {
    src: ${`url(${PTSerifBoldItalic}) format('truetype')`};
    font-family: 'PTSerif';
    font-style: italic;
    font-weight: 700;
  }
  @font-face {
    src: ${`url(${PTSerifRegularItalic}) format('truetype')`};
    font-family: 'PTSerif';
    font-style: italic;
    font-weight: 400;
  }

  // Variables
  :root {
    --black: #000;
    --primary-color: #B91C1C;
    --primary-color-tint: #991B1B;
    --primary-color-shade: #7F1D1D;
    --gray-dark: #333333;
    --gray-darker: #292929;
    --orange: #EA580C;
    --orange-light: #FED7AA;
    --teal: #115E59;
    --magenta: #AA1994;
    --magenta-light: #FFC5F7;
    --blue: #006FC5;
    --blue-light: #C5EEFF;
    --text-color-tint: #666;
    --white: #fff;
  }

  // Smooth Reset
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: var(--white);
    color: var(--gray-dark);
  }

  body, input, textarea, button {
    font-family: 'Arial', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  a {
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;

export const Button = styled.button`
  color: var(--white);
  font-family: 'Nunito';
  font-weight: 800;
  font-size: ${(props) => props.theme.fontSize};
  padding: 1rem 1.8rem;
  background: ${({ disabled, theme }) =>
    disabled ? tint(0.5, '#006fc5') : theme.color};
  border-radius: 1.2rem;
  border: none;
  outline-offset: 2px;
  outline: 3px dotted transparent;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  cursor: initial;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
  ${({ disabled }) =>
    !disabled &&
    css`
      cursor: pointer;
      &:hover {
        background: ${(props) =>
          props.theme.shade ? props.theme.shade : props.theme.color};
        outline: 3px dotted
          ${(props) =>
            props.theme.shade ? props.theme.shade : props.theme.color};
      }
    `}
  svg {
    filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.25));
  }
`;

export const ButtonLink = styled.a`
  color: var(--white);
  font-family: 'Nunito';
  font-weight: 800;
  font-size: ${(props) => props.theme.fontSize};
  padding: 1rem 1.8rem;
  background: ${(props) => props.theme.color};
  border-radius: 1.2rem;
  border: none;
  outline-offset: 2px;
  outline: 3px dotted transparent;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
  &:hover {
    background: ${(props) =>
      props.theme.shade ? props.theme.shade : props.theme.color};
    outline: 3px dotted
      ${(props) => (props.theme.shade ? props.theme.shade : props.theme.color)};
  }
  svg {
    filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.25));
  }
`;

export const ButtonLinkEmpty = styled.a`
  color: ${(props) => props.theme.color};
  font-family: 'Nunito';
  font-weight: 800;
  font-size: ${(props) => props.theme.fontSize};
  padding: 1rem 1.8rem;
  background: var(--white);
  outline: 3px dotted transparent;
  outline-offset: -3px;
  border-radius: 1.2rem;
  border: 2px solid ${(props) => props.theme.color};
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  &:hover {
    outline: 3px dotted ${(props) => props.theme.color};
    border: 2px solid transparent;
  }
`;

export const CensorText = styled.del`
  display: block;
  width: calc(100% - 0.8em);
  margin: 0 auto;
  span {
    display: inline-block;
    background: linear-gradient(
      0deg,
      transparent 5%,
      black 5%,
      black 95%,
      transparent 0
    );
    color: transparent;
    transform: rotate(0.5deg) skewx(-5deg);
    padding: 0 1em;
    margin: 0 -0.4em;
    user-select: none;
    cursor: default;
    border-radius: 0.2em 0.3em;
    &:nth-child(odd) {
      transform: rotate(-1.4deg) skewx(-6deg);
    }
  }
`;
