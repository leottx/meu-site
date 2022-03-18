import styled from 'styled-components';

// IMAGES
import textureGrunge from '@Images/texture-white-grunge.png';

export const Container = styled.footer`
  background-color: var(--primary-color);
  background-image: ${`url(${textureGrunge})`}, ${`url(${textureGrunge})`};
  background-size: 1200px, 900px, 200px;
  background-position: 0 0, 100% 100%, 50%;
  position: relative;
`;

export const Contact = styled.section`
  padding: 6rem 2rem;
  margin: 0 auto;
  > p {
    color: var(--white);
    text-align: center;
    font-family: 'PTSerif', serif;
    font-style: italic;
    // 16px @320px increasing to 22px @1460px
    font-size: 1rem;
    font-size: clamp(
      1rem * 1.6,
      0.8947368421052632rem * 1.6 + 0.5263157894736842vw,
      1.375rem * 1.6
    );
    text-decoration: underline;
    text-decoration-thickness: 1px;
  }
  @media only screen and (min-width: 640px) {
    width: 92vw;
  }
  @media only screen and (min-width: 768px) {
    padding: 10rem 2rem 8rem;
    width: 85vw;
  }
`;

export const Header = styled.header`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-template-areas:
    'image image'
    'text text';
  row-gap: 2rem;
  column-gap: 3.6rem;
  // 60px @320px increasing to 100px @1460px
  margin-bottom: clamp(
    3.75rem * 1.6,
    2.8728070175438596rem * 1.6 + 4.385964912280701vw,
    6.875rem * 1.6
  );

  figure {
    grid-area: image;
    position: relative;
    transform: rotate(-12deg) ${`scale(${Math.cos(Math.abs(-12))})`};
    width: min(50vw, 100px);
    height: min(60vw, 120px);
    img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
      border-radius: 1.2rem;
      border: 6px solid var(--white);
    }
    &::after {
      content: '';
      width: 100%;
      height: 100%;
      border-radius: 1.6rem;
      border: 3px dotted var(--white);
      top: 0;
      left: 0;
      position: absolute;
      z-index: -1;
      transform: rotate(12deg);
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
  color: var(--white);
  span {
    font-family: 'PTSerif';
    // 12px @320px increasing to 16px @1460px
    font-size: clamp(
      0.75rem * 1.6,
      0.6798245614035088rem * 1.6 + 0.3508771929824561vw,
      1rem * 1.6
    );
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 0.2rem;
    display: inline-block;
    margin-bottom: 0.4em;
  }
  h4 {
    font-family: 'Nunito', sans-serif;
    font-weight: 800;
    font-size: clamp(
      2rem * 1.6,
      1.8245614035087718rem * 1.6 + 0.8771929824561403vw,
      2.625rem * 1.6
    );
    line-height: 1.2;
    margin-bottom: calc(0.5em + 0.5vw);
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
  }
  p {
    font-family: 'PTSerif';
    font-style: italic;
    line-height: 1.6;
    font-size: clamp(
      1.125rem * 1.6,
      1.0197368421052633rem * 1.6 + 0.5263157894736842vw,
      1.5rem * 1.6
    );
    margin-top: calc(1em + 0.5vw);
  }
`;

export const Form = styled.form`
  margin: 0 auto 4.8rem;
  max-width: 820px;
  padding: 0 3rem 3rem;
  background: #f1f7ff;
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  border-radius: 1.2rem;
  > p {
    position: relative;
    font-family: 'Nunito';
    font-weight: 800;
    top: -1em;
    margin-bottom: 2rem;
    margin: 0 auto;
    width: fit-content;
    font-size: clamp(
      1.375rem * 1.6,
      1.3048245614035088rem * 1.6 + 0.3508771929824561vw,
      1.625rem * 1.6
    );
    background: #0168b8;
    padding: 1rem 2.4rem;
    border-radius: 1.2rem;
    color: var(--white);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    border: 0.4rem solid var(--white);
    text-align: center;
  }

  button {
    box-shadow: 0 0 0 2rem #f1f7ff;
    padding: 1rem 2.4rem;
  }

  @media only screen and (min-width: 768px) {
    margin-bottom: 8rem;
  }
`;

export const InputWrapper = styled.div`
  font-family: 'PTSerif', serif;
  label {
    font-size: clamp(
      1rem * 1.6,
      0.9649122807017544rem * 1.6 + 0.17543859649122806vw,
      1.125rem * 1.6
    );
    margin-bottom: 0.8rem;
    display: inline-block;
  }

  input,
  textarea {
    font-size: clamp(
      1rem * 1.6,
      0.9649122807017544rem * 1.6 + 0.17543859649122806vw,
      1.125rem * 1.6
    );
    width: 100%;
    border-radius: 1.2rem;
    background: var(--white);
    border: 1px solid #d2dfe4;
    padding: 1rem 1.6rem;
    font-family: inherit;
    &::placeholder {
      font-style: italic;
    }
    &:focus {
      outline: 1px solid #d2dfe4;
    }
  }

  input {
    height: 5rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: block;
  text-align: center;
  background-image: linear-gradient(#d2dfe4, #d2dfe4);
  background-size: 100% 1px;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const Social = styled.ul`
  display: flex;
  gap: 0.6em;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  font-size: clamp(
    1.875rem * 1.6,
    1.6995614035087718rem * 1.6 + 0.8771929824561403vw,
    2.5rem * 1.6
  );
  li {
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.1) translatey(0.6rem);
    }
  }
  a {
    color: var(--white);
  }
`;

export const Copyright = styled.section`
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.8);
  font-size: clamp(
    0.75rem * 1.6,
    0.6798245614035088rem * 1.6 + 0.3508771929824561vw,
    1rem * 1.6
  );
  font-family: 'PTSerif', serif;
  padding: 3rem 0;
  background: var(--primary-color-tint);
  > * {
    display: block;
    text-align: center;
  }
  span {
    margin-bottom: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  a {
    color: inherit;
    text-decoration: underline;
  }
`;
