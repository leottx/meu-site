import styled from 'styled-components';

// IMAGES
import textureWaves from '@Images/texture-waves.svg';

export const Container = styled.section`
  background-image: ${`url(${textureWaves})`};
  background-size: 10px;
  background-position: top left;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    right: 0;
    left: -0%;
    top: 0;
    z-index: 10;
    display: block;
    height: 14px;
    background-size: 14px 100%;
    background-image: linear-gradient(135deg, #162c35 25%, transparent 25%),
      linear-gradient(225deg, #162c35 25%, transparent 25%);
    background-position: 0 0;
  }
`;

export const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  padding: 7rem 2rem 6rem;
  margin: 0 auto;
  max-width: 1460px;
  @media only screen and (min-width: 640px) {
    width: 92vw;
  }
  @media only screen and (min-width: 768px) {
    padding: 10rem 2rem;
    width: 85vw;
  }
`;

export const LatestArticle = styled.article`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-template-areas:
    'image image'
    'text text';
  row-gap: 2rem;
  column-gap: 3.6rem;
  figure {
    grid-area: image;
    position: relative;
    transform: rotate(-12deg) ${`scale(${Math.cos(Math.abs(-12))})`};
    width: min(50vw, 160px);
    height: min(60vw, 192px);
    /* width: 50vw;
    height: 60vw; */
    /* max-width: 160px;
    max-height: 192px; */
    img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
      border-radius: 1.6rem;
      border: 10px solid var(--primary-color);
    }
    &::after {
      content: '';
      width: 100%;
      height: 100%;
      border-radius: 1.6rem;
      border: 3px dotted var(--primary-color-shade);
      top: 0;
      left: 0;
      position: absolute;
      z-index: -1;
      transform: rotate(12deg);
    }
  }
  @media only screen and (min-width: 600px) {
    figure {
      width: min(50vw, 215px);
      height: min(50vw, 258px);
      &::after {
        border-width: 4px;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    grid-template-columns: min-content 1fr;
    grid-template-areas:
      'image text'
      'image text';
  }
`;

export const Content = styled.div`
  grid-area: text;
  font-weight: 400;
  font-family: 'PTSerif';
  > span {
    font-family: 'PTSerif';
    // 16px @320px increasing to 18px @1460px
    font-size: clamp(
      1rem * 1.6,
      0.9649122807017544rem * 1.6 + 0.17543859649122806vw,
      1.125rem * 1.6
    );
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 0.2rem;
    color: var(--text-color-tint);
    display: inline-block;
    margin-bottom: 0.4em;
  }
  h4 {
    font-family: 'Nunito', sans-serif;
    font-weight: 800;
    font-size: clamp(
      1.75rem * 1.6,
      1.6096491228070176rem * 1.6 + 0.7017543859649122vw,
      2.25rem * 1.6
    );
    margin-bottom: calc(0.5em + 0.5vw);
    a {
      color: inherit;
    }
  }
  p {
    line-height: 1.6;
    // 17px @320px increasing to 20px @1460px
    font-size: clamp(
      1.0625rem * 1.6,
      1.0098684210526316rem * 1.6 + 0.2631578947368421vw * 1.6,
      1.25rem * 1.6
    );
  }
`;

export const CreatedAt = styled.div`
  display: flex;
  align-items: center;
  time {
    // 12px @320px increasing to 16px @1460px
    font-size: clamp(
      0.75rem * 1.6,
      0.6798245614035088rem * 1.6 + 0.3508771929824561vw,
      1rem * 1.6
    );
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 0.2rem;
    color: var(--text-color-tint);
    margin-left: 0.8rem;
  }
  svg {
    // 14px @320px increasing to 16px @1460px
    font-size: clamp(
      0.875rem * 1.6,
      0.8399122807017544rem * 1.6 + 0.17543859649122806vw,
      1rem * 1.6
    );
    color: #b91c1c;
  }
`;

export const BlogContainer = styled.div`
  > span {
    font-family: 'PTSerif';
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    // 12px @320px increasing to 16px @1460px
    font-size: clamp(
      0.75rem * 1.6,
      0.6798245614035088rem * 1.6 + 0.3508771929824561vw,
      1rem * 1.6
    );
    margin-bottom: 1.5em;
    display: inline-block;
  }
`;

export const BlogGrid = styled.div`
  display: grid;
  row-gap: 4.8rem;
  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Article = styled.article`
  @media screen and (min-width: 1024px) {
    width: 90%;
  }
`;
