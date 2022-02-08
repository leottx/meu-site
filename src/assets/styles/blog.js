import styled from 'styled-components';

import selfPortrait from '@Images/leonardo-portrait.jpg';

import rippedPaperTop from '@Images/ripped-paper-top.svg';

import rippedPaperBottom from '@Images/ripped-paper-bottom.svg';

export const Container = styled.section`
  position: relative;
  /* background: ${`url(${rippedPaperTop}) center top -0.1rem/105% no-repeat, #fff url(${rippedPaperBottom}) center bottom -0.1rem/105% no-repeat`}; */
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
  padding: 7rem 2rem;
`;

export const LatestArticle = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  figure {
    display: inline-flex;
    position: relative;
    margin-left: 3rem;
    align-self: flex-start;
    img {
      width: 145px;
      height: 174px;
      object-fit: cover;
      border-radius: 1.6rem;
      border: 8px solid var(--primary-color);
    }
    &::after {
      content: '';
      width: 98%;
      height: 90%;
      border-radius: 1.6rem;
      border: 8px solid var(--primary-color-shade);
      top: 0;
      left: -8px;
      position: absolute;
      z-index: -1;
      transform: rotate(-20deg);
      background: #999;
    }
  }
  > span {
    font-family: 'PTSerif';
    font-size: 1.6rem;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 0.2rem;
    color: var(--text-color-tint);
  }
`;

export const Content = styled.div`
  font-weight: 400;
  font-family: 'PTSerif';
  h4 {
    font-family: 'Nunito', sans-serif;
    font-weight: 800;
    font-size: calc(1.8rem + 1vw);
    margin-bottom: 0.8rem;
    a {
      color: inherit;
    }
  }
  p {
    font-size: 1.8rem;
    line-height: 1.6;
  }
`;

export const CreatedAt = styled.time`
  font-size: 1.24rem;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 0.2rem;
  color: var(--text-color-tint);
`;

export const BlogGrid = styled.div`
  display: grid;
  row-gap: 2.4rem;
  > span {
    font-family: 'PTSerif';
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    font-size: 1.24rem;
  }
`;

export const Article = styled.article``;
