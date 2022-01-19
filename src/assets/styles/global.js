import { createGlobalStyle } from 'styled-components';

// Fonts
import MontserratLight from '@Fonts/Montserrat-Light.ttf';
import MontserratRegular from '@Fonts/Montserrat-Regular.ttf';
import MontserratSemibold from '@Fonts/Montserrat-SemiBold.ttf';
import MontserratMedium from '@Fonts/Montserrat-Medium.ttf';
import MontserratBold from '@Fonts/Montserrat-Bold.ttf';
import MontserratExtraBold from '@Fonts/Montserrat-ExtraBold.ttf';

export const GlobalStyles = createGlobalStyle`
  // Montserrat
  @font-face {
    src: ${`url(${MontserratLight}) format('truetype')`};
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
  }
  @font-face {
    src: ${`url(${MontserratRegular}) format('truetype')`};
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
  }
  @font-face {
    src: ${`url(${MontserratMedium}) format('truetype')`};
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
  }
  @font-face {
    src: ${`url(${MontserratSemibold}) format('truetype')`};
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
  }
  @font-face {
    src: ${`url(${MontserratBold}) format('truetype')`};
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
  }
  @font-face {
    src: ${`url(${MontserratExtraBold}) format('truetype')`};
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 800;
  }

  // Variables
  :root {
    --black: #000;
    --primary-color: #6544e9;
    --primary-color-contrast: #fff;
    --primary-color-tint: #8262ff;
    --primary-color-shade: #4b32ae;
    --secondary-color: #30206f;
    --secondary-color-contrast: #fff;
    --secondary-color-shade: #1a123d;
    --ternary-color:#120c24;
    --ternary-color-shade: #0a0713;
    --text-color-tint: hsla(0,0%,100%,0.75);
    --light-grey: rgba(255, 255, 255, 0.63);
    --white: #fff;
  }

  [data-theme='dark'] {
    --black: #000;
    --primary-color: #6544e9;
    --primary-color-contrast: #fff;
    --primary-color-tint: #8262ff;
    --primary-color-shade: #4b32ae;
    --secondary-color: #30206f;
    --secondary-color-contrast: #fff;
    --secondary-color-shade: #1a123d;
    --ternary-color:#120c24;
    --ternary-color-shade: #0a0713;
    --text-color-tint: hsla(0,0%,100%,0.75);
    --light-grey: rgba(255, 255, 255, 0.63);
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
  }

  body, input, textarea, button {
    font-family: 'Montserrat', sans-serif;
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
