import styled from 'styled-components';

export const Container = styled.footer`
  background: var(--primary-color);
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 20px 40px 0 40px;
    border-color: var(--white) transparent transparent transparent;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const Contact = styled.section`
  padding: 6rem 2rem;
  > span {
    font-family: 'PTSerif';
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    font-size: 1.24rem;
    color: var(--white);
    margin-bottom: 6rem;
    display: inline-block;
  }
  > p {
    color: var(--white);
    font-family: 'PTSerif', sans-serif;
    font-size: 1.8rem;
    font-style: italic;
    text-align: center;
    text-decoration: underline;
  }
`;

export const Form = styled.form`
  margin-bottom: 4.8rem;
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
    font-size: 2.4rem;
    background: #0168b8;
    padding: 1rem 2rem;
    border-radius: 1.2rem;
    color: var(--white);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    border: 0.4rem solid var(--white);
    text-align: center;
  }

  button {
    padding: 0 2.4rem;
    height: 5rem;
    background: #0168b8;
    color: var(--white);
    font-family: 'Nunito', sans-serif;
    font-size: 2.4rem;
    font-weight: 800;
    border: none;
    border-radius: 1.2rem;
    outline-offset: 2px;
    outline: 3px dotted transparent;
    display: flex;
    margin: 0 auto;
    box-shadow: 0 0 0 2rem #f1f7ff;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    transition: all 0.2s;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
    &:hover {
      outline: 3px dotted #0168b8;
    }
    svg {
      filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.25));
    }
  }
`;

export const InputWrapper = styled.div`
  font-family: 'PTSerif', serif;
  label {
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
    display: inline-block;
  }

  input,
  textarea {
    font-size: 1.6rem;
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
  gap: 1.6rem;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  li {
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.1) translatey(0.6rem);
    }
  }
  a {
    color: var(--white);
  }
  svg {
    width: 3rem;
    height: auto;
  }
`;

export const Copyright = styled.section`
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.3rem;
  padding: 3rem 0;
  background: var(--primary-color-shade);
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  > * {
    display: block;
    text-align: center;
  }
  span {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  a {
    color: inherit;
    text-decoration: underline;
  }
`;
