import styled from 'styled-components';

export const Container = styled.section`
  /* background: var(--gray-darker); */
  background: #162c35;
`;

export const ProjectWrapper = styled.div`
  padding: 6rem 2rem;
`;

export const ProjectAbout = styled.div`
  color: var(--white);
  span {
    font-family: 'PTSerif';
    /* color: var(--orange); */
    color: #6fd2ff;
    font-size: 1.1rem;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
  }
  h2 {
    font-family: 'Nunito';
    font-weight: 800;
    font-size: calc(2.6rem + 1.6vw);
    line-height: 1.2;
    margin: 0.5rem 0 2rem;
  }
  p {
    font-family: 'PTSerif';
    line-height: 1.5;
    font-size: 1.8rem;
    margin-bottom: 4rem;
  }
`;

export const ProjectList = styled.ul``;

export const Card = styled.li`
  background: var(--white);
  border-radius: 1.2rem;
  overflow: hidden;
  figure {
    position: relative;
    img {
      width: 100%;
      max-width: 100%;
      height: 170px;
      object-fit: cover;
      object-position: center;
      filter: grayscale(100%);
    }
    &::before {
      pointer-events: none;
      content: '';
      height: 100%;
      width: 100%;
      display: block;
      background: linear-gradient(130deg, var(--orange), var(--teal) 76%);
      mix-blend-mode: screen;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 100;
    }
  }
`;

export const CardWrapper = styled.div`
  padding: 2rem;
  h3 {
    font-family: 'Nunito';
    font-size: calc(2.4rem + 1.3vw);
    font-weight: 800;
    margin: 1rem 0 2rem;
    a {
      color: var(--orange);
      text-decoration: underline;
    }
  }
  p {
    font-size: 1.8rem;
    font-family: 'PTSerif';
    margin-bottom: 3rem;
    line-height: 1.6;
  }
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Tag = styled.li`
  background: var(--orange-light);
  color: var(--orange);
  font-family: 'Nunito';
  font-weight: 800;
  font-size: 1.3rem;
  padding: 0.8rem 1.2rem;
  border-radius: 1.2rem;
`;

export const CardBtn = styled.a`
  color: var(--white);
  font-family: 'Nunito';
  font-weight: 800;
  font-size: calc(2rem + 0.25vw);
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 1.8rem;
  background: var(--orange);
  border-radius: 1.2rem;
  border: none;
  outline-offset: 2px;
  outline: 3px dotted transparent;
  transition: all 0.2s;
  cursor: pointer;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
  &:hover {
    outline: 3px dotted var(--orange);
    background: var(--orange);
  }
  svg {
    filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.25));
  }
`;
