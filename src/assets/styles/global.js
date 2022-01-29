import { createGlobalStyle } from 'styled-components';

// Images
import siteBg from '@Images/site-bg.svg';

// Fonts
import NunitoLight from '@Fonts/Nunito-Light.ttf';
import NunitoRegular from '@Fonts/Nunito-Regular.ttf';
import NunitoSemibold from '@Fonts/Nunito-SemiBold.ttf';
import NunitoMedium from '@Fonts/Nunito-Medium.ttf';
import NunitoBold from '@Fonts/Nunito-Bold.ttf';
import NunitoExtraBold from '@Fonts/Nunito-ExtraBold.ttf';
import PTSerifBold from '@Fonts/PTSerif-Bold.ttf';
import PTSerifRegular from '@Fonts/PTSerif-Regular.ttf';
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
    --text-color-tint: hsla(0,0%,100%,0.75);
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
    /* min-height: 100vh;
    background-image: ${`url(${siteBg})`};
    fill:rgba(101, 68, 233, 0.15);
    background-size:290px 290px;
    background-repeat:repeat; */
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
