import styled from 'styled-components';

export const Container = styled.section`
  /* grid-column: 1 / -1; */
`;

export const HeroWrapper = styled.div`
  padding: 2rem 0 8rem;
  background-size: cover;
  background-position: top center;
  box-shadow: none;
  overflow-x: hidden;
  display: grid;
  align-content: start;
  position: relative;
  grid-template-columns: 3rem 1fr 3rem;
  grid-template-areas:
    '. title .'
    '. image .'
    '. text . ';
`;

export const HeroTitleWrapper = styled.div`
  color: var(--white);
  padding-bottom: 1.2rem;
  grid-area: title;
  font-family: 'Nunito';
  &::after {
    content: '';
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    position: absolute;
    background-color: var(--primary-color);
    border-radius: 2.8rem;
    left: -10em;
    right: -20rem;
    top: -6rem;
    bottom: -7rem;
    z-index: -1;
    margin-bottom: 0.5em;
  }
  h1 {
    color: var(--white);
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1.2;
    padding: 0.5em 0 1em;
  }
  p {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 4rem;
    a {
      color: var(--white);
    }
    svg {
      margin-left: 0.6rem;
      width: 2.4rem;
      height: 2.4rem;
    }
  }
`;

export const HeroPicWrapper = styled.figure`
  background-color: c.$white;
  border-radius: 25px;
  box-shadow: 2px 5px 12px rgba(0, 0, 0, 0.2);
  grid-area: image;
  height: 90vw;
  margin-bottom: 4.8rem;
  overflow: hidden;
  width: 75vw;
  img {
    border: 10px solid var(--white);
    border-radius: 25px;
    display: block;
    height: 90vw;
    width: 75vw;
    object-fit: cover;
  }
`;

export const HeroSkillWrapper = styled.div`
  grid-area: text;
  color: var(--gray-dark);
  h2 {
    font-family: 'Nunito', sans-serif;
    font-size: 3.2rem;
    font-weight: 800;
  }
  ul {
    align-items: center;
    display: grid;
    grid-template-columns: repeat(auto-fill, 56px);
    gap: 1rem 2.4rem;
    margin: 2.4rem 0 3.6rem;
    svg {
      width: 5.6rem;
      height: 5.6rem;
    }
  }
  a {
    color: var(--white);
    font-family: 'Nunito';
    font-weight: 800;
    font-size: 2rem;
    display: inline-flex;
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
  }
`;
