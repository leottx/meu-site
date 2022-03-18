import styled from 'styled-components';

// IMAGENS
import openQuote from '@Images/icon-quote-open.svg';
import closeQuote from '@Images/icon-quote-close.svg';
import textureWaves from '@Images/texture-waves.svg';

export const Container = styled.section`
  background-image: ${`url(${textureWaves})`};
  background-size: 10px;
  background-position: top left;
`;

export const HeroWrapper = styled.div`
  padding: 6rem 2rem;
  max-width: 1460px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  align-content: center;
  @media only screen and (min-width: 640px) {
    width: 92vw;
  }
  @media only screen and (min-width: 768px) {
    padding: 8rem 2rem;
    width: 85vw;
  }
  @media only screen and (min-width: 1200px) {
    padding: 10rem 2rem;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    column-gap: 3.2rem;
  }
`;

export const Bio = styled.div`
  display: grid;
  /* grid-template-columns: 3rem 1fr 3rem; */
  grid-column: 1/8;
  /* grid-template-rows: 3rem auto auto auto 3rem; */
  grid-template-rows: repeat(3, auto);
  position: relative;
  align-self: flex-start;
  grid-template-areas:
    'image'
    'about'
    'story';
  @media only screen and (min-width: 576px) {
    /* grid-template-columns: 3rem min-content 1fr 3rem;
    grid-template-areas:
      '. . . .'
      '. image about .'
      '. story story .'
      '. . . .'; */
    grid-template-columns: min-content 1fr;
    grid-template-areas:
      'image about'
      'story story';
  }
  /* @media only screen and (min-width: 1200px) {
    grid-template-columns: 3.6rem min-content 1fr 3.6rem;
    grid-template-rows: 3.6rem auto auto auto 3.6rem;
  } */
`;

export const About = styled.div`
  grid-area: about;
  border-radius: 1.2rem;
  color: #527e3a;
  font-family: 'Nunito', sans-serif;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
  /* &::after {
    content: '';
    grid-column: 1/-1;
    grid-row: 1/-1;
    position: absolute;
    background: #f3fbee;
    border: 2px dashed #8db17a;
    border-radius: 1.2rem;
    left: 0;
    right: 0;
    top: 0;
    bottom: -6px;
    z-index: -1;
    margin-bottom: 0.6em;
    box-shadow: 0 5px 12px -7px rgba(0, 0, 0, 0.8);
  } */
  @media only screen and (min-width: 576px) {
    margin-top: 0;
    margin-left: 3rem;
  }
`;

export const Story = styled.div`
  font-family: 'PTSerif';
  // 17px @320px increasing to 20px @1460px
  font-size: clamp(
    1.125rem * 1.6,
    1.0899122807017543rem * 1.6 + 0.17543859649122806vw,
    1.25rem * 1.6
  );
  line-height: 1.6;
  grid-area: story;
  position: relative;
  margin-top: 3rem;
  a {
    font-weight: 700;
    color: inherit;
    text-decoration: underline;
    &:hover {
      color: #527e3a;
    }
  }
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 80px;
    height: 80px;
    background-repeat: no-repeat;
    background-size: cover;
    filter: invert(45%) sepia(29%) saturate(760%) hue-rotate(55deg)
      brightness(90%) contrast(88%);
    z-index: -1;
    opacity: 0.3;
  }
  &::before {
    top: -25px;
    left: -16px;
    background-image: url(${openQuote});
  }
  &::after {
    bottom: -16px;
    right: -16px;
    background-image: url(${closeQuote});
  }

  @media only screen and (min-width: 576px) {
    margin-top: 3.6rem;
  }
`;

export const Location = styled.p`
  // 20px @320px increasing to 24px @1460px
  font-size: clamp(
    1.25rem * 1.6,
    1.1798245614035088rem * 1.6 + 0.3508771929824561vw,
    1.5rem * 1.6
  );
  font-weight: 700;
  a {
    color: #555;
  }
`;

export const AboutTitle = styled.div`
  h1 {
    // 32px @320px increasing to 42px @1460px
    font-size: clamp(
      2rem * 1.6,
      1.8245614035087718rem * 1.6 + 0.8771929824561403vw,
      2.625rem * 1.6
    );
    font-weight: 900;
    line-height: 1.2;
  }
`;

export const PicWrapper = styled.div`
  grid-area: image;
  width: clamp(145px, 50vw, 180px);
  height: clamp(174px, 60vw, 216px);
`;

export const Picture = styled.figure`
  height: 100%;
  transform: rotate(-12deg) ${`scale(${Math.cos(Math.abs(-12))})`};
  position: relative;
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    border-radius: 1.6rem;
    border: 10px solid #527e3a;
  }
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 1.6rem;
    border: 4px dotted #527e3a;
    top: 0;
    left: 0;
    position: absolute;
    z-index: -1;
    transform: rotate(12deg);
  }
`;

export const Skills = styled.div`
  border-radius: 1.2rem;
  display: flex;
  flex-direction: column;
  grid-column: 9 /-1;
  padding: 3rem;
  background: #ffecd6;
  border: 2px dashed #f5a376;
  position: relative;
  box-shadow: 0 5px 12px -7px rgba(0, 0, 0, 0.8);
  width: 100%;
  min-height: 500px;
  a {
    align-self: center;
    position: relative;
    z-index: 1;
  }
  @media only screen and (min-width: 1200px) {
    padding: 3.6rem;
  }
`;

export const SkillsIcons = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(5.2rem, 1fr));
  gap: 2rem;
  justify-items: center;
  justify-content: center;
  align-items: center;
  margin: auto;
  transform: translateY(4rem);
  max-width: 360px;
  width: 100%;
  position: relative;
  z-index: 1;
  svg {
    width: calc(4.2rem + 1vw);
    max-width: 5.2rem;
    height: auto;
    &:last-child {
      margin-right: auto;
    }
  }
  @media only screen and (min-width: 1200px) {
    transform: translateY(4.8rem);
  }
`;

export const SkillsTitle = styled.h2`
  font-family: 'Nunito';
  font-weight: 800;
  // 26px @320px increasing to 32px @1460px
  font-size: clamp(
    1.625rem * 1.6,
    1.5197368421052633rem * 1.6 + 0.5263157894736842vw,
    2rem * 1.6
  );
  padding: 0 1.8rem;
  height: 5.5rem;
  display: flex;
  align-items: center;
  background: #f55700;
  border-radius: 1.2rem;
  align-self: center;
  color: var(--white);
  position: relative;
  z-index: 1;
  transform-style: preserve-3D;
  -ms-transform: translateY(50%) translateY(38px); /* IE 11 */
  transform: translateY(calc(50% + 38px));
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
  &::before {
    content: '';
    position: absolute;
    width: calc(100% - 6rem);
    padding-top: calc(100% - 6rem);
    border-radius: 50%;
    background: #faaa60;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%) translateZ(-1px);
    z-index: -1;
  }
  &::after {
    content: '';
    position: absolute;
    width: calc(100% - 3rem);
    padding-top: calc(100% - 3rem);
    border-radius: 50%;
    background: rgba(250, 170, 96, 0.3);
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%) translateZ(-2px);
    z-index: -2;
  }
`;

export const SkillsCloud = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  right: 0;
  z-index: 0;
  max-width: 500px;
  width: 100%;
  transform: translateX(-50%);
`;

export const SkillsList = styled.ul`
  overflow: hidden;
  li {
    position: absolute;
    font-family: 'Nunito', sans-serif;
    font-weight: 800;
    color: rgba(191, 93, 0, 0.18);
  }
`;

export const Tape = styled.div`
  content: '';
  display: block;
  height: 34px;
  position: absolute;
  margin: auto;
  background: #e2d6c4;
  /* box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1); */
  border-right: 1px dotted #e2d6c4;
  border-left: 1px dotted #e2d6c4;
  opacity: 0.5;
  &.top-left {
    top: 5px;
    left: -40px;
    transform: rotate(-45deg);
    width: 120px;
  }
  &.bottom-right {
    transform: rotate(-45deg);
    bottom: 5px;
    right: -40px;
    width: 120px;
  }
`;
