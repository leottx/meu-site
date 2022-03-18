import styled from "styled-components";

// IMAGES
import textureGrunge from "@Images/texture-white-grunge.png";

export const Container = styled.section`
  background: #162c35;
  background-image: ${`url(${textureGrunge})`}, ${`url(${textureGrunge})`};
  background-size: 1200px, 900px, 200px;
  background-position: 0 0, 100% 100%, 50%;
  /* background-attachment: fixed, scroll, scroll; */
`;

export const ProjectWrapper = styled.div`
  padding: 6rem 2rem;
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

export const ProjectAbout = styled.div`
  color: var(--white);
  max-width: 1062px;
  span {
    font-family: "PTSerif";
    color: #6fd2ff;
    display: block;
    // 12px @320px increasing to 16px @1460px
    font-size: clamp(
      0.75rem * 1.6,
      0.6798245614035088rem * 1.6 + 0.3508771929824561vw,
      1rem * 1.6
    );
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    margin-bottom: 0.6em;
  }
  h2 {
    font-family: "Nunito";
    font-weight: 800;
    font-size: clamp(
      2rem * 1.6,
      1.8245614035087718rem * 1.6 + 0.8771929824561403vw,
      2.625rem * 1.6
    );
    line-height: 1.2;
  }
  p {
    font-family: "PTSerif";
    font-style: italic;
    line-height: 1.6;
    font-size: clamp(
      1.125rem * 1.6,
      1.0197368421052633rem * 1.6 + 0.5263157894736842vw,
      1.5rem * 1.6
    );
    margin-top: calc(1em + 0.5vw);
    margin-bottom: 4.2rem;
    @media only screen and (min-width: 740px) {
      margin-bottom: 10rem;
    }
  }
`;

export const ProjectList = styled.ul`
  display: grid;
  row-gap: 4.8rem;
  @media only screen and (min-width: 890px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 3.2rem;
  }
  @media only screen and (min-width: 1536px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Card = styled.li`
  background: var(--white);
  border-radius: 1.2rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  figure {
    position: relative;
    img {
      display: block;
      width: 100%;
      max-width: 100%;
      height: 170px;
      object-fit: cover;
      object-position: center;
      filter: grayscale(100%);
    }
    &::before {
      pointer-events: none;
      content: "";
      height: 100%;
      width: 100%;
      display: block;
      background: ${({ theme }) =>
        `linear-gradient(130deg, ${theme.firstColor}, ${theme.secondColor} 76%)`};
      mix-blend-mode: screen;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 100;
    }
  }
  /* ${CardWrapper} {
    h3 {
      a {
        background: ${(props) => props.firstColor};
        color: ${(props) => props.firstColor};
      }
    }
  } */
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: clamp(
    1.25rem * 1.6,
    0.9692982456140351rem * 1.6 + 1.4035087719298245vw,
    2.25rem * 1.6
  );
  h3 {
    font-family: "Nunito";
    // 28px @320px increasing to 38px @1460px
    font-size: clamp(
      1.75rem * 1.6,
      1.5745614035087718rem * 1.6 + 0.8771929824561403vw,
      2.375rem * 1.6
    );
    font-weight: 800;
    margin: 0.4em 0 0.6em;
    a {
      text-decoration: underline;
      text-decoration-thickness: 1px;
      color: ${({ theme }) => theme.firstColor};
    }
  }
  p {
    font-size: clamp(
      1.0625rem * 1.6,
      1.0098684210526316rem * 1.6 + 0.2631578947368421vw * 1.6,
      1.25rem * 1.6
    );
    font-family: "PTSerif";
    margin-bottom: 3rem;
    line-height: 1.6;
    a {
      color: ${({ theme }) => theme.firstColor};
    }
  }
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Tag = styled.li`
  background: ${({ theme }) => theme.thirdColor};
  color: ${({ theme }) => theme.firstColor};
  font-family: "Nunito";
  font-weight: 800;
  font-size: clamp(
    0.8125rem * 1.6,
    0.7774122807017544rem * 1.6 + 0.17543859649122806vw,
    0.9375rem * 1.6
  );
  padding: 0.8rem 1.2rem;
  border-radius: 1.2rem;
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;
  margin-top: auto;
  a {
    flex-grow: 1;
    justify-content: center;
    padding: 0 1.8rem;
    height: 50px;
  }
`;
