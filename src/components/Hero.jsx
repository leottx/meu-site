// DOCUMENTOS
import curriculum from '@Docs/leonardo-teixeira-curriculo.pdf';

// IMAGENS
import selfPortrait from '@Images/leonardo-portrait.jpg';

// ESTILOS
import {
  Container,
  HeroWrapper,
  Bio,
  About,
  Location,
  AboutTitle,
  PicWrapper,
  Picture,
  Story,
  Skills,
  SkillsTitle,
  SkillsIcons,
  SkillsCloud,
  SkillsList,
  Tape,
} from '@Styles/hero';

import { ButtonLink } from '@Styles/global';

// ICONES
import {
  FaMapMarkerAlt,
  FaReact,
  FaGitAlt,
  FaNodeJs,
  FaCloudDownloadAlt,
} from 'react-icons/fa';

import { SiJavascript } from 'react-icons/si';

export const Hero = () => {
  return (
    <Container id="sobre">
      <HeroWrapper>
        <Bio>
          <PicWrapper>
            <Picture>
              <img src={selfPortrait} alt="Foto do Leonardo sorrindo" />
            </Picture>
          </PicWrapper>
          <About>
            <AboutTitle>
              <h1>Leonardo é um Dev Front End apaixonado por tecnologia.</h1>
            </AboutTitle>
            <Location>
              <a href="https://goo.gl/maps/vW8wjjtLBNP5ctK77" target="_blank">
                Limeira - SP, Brasil
                <FaMapMarkerAlt />
              </a>
            </Location>
          </About>
          <Story>
            <p>
              Gosto tanto de criar aplicações bonitas e divertidas que decidi
              fazer disso a minha profissão! Atualmente procuro uma oportunidade
              para iniciar minha carreira como desenvolvedor. Já construí{' '}
              <a
                href="https://github.com/leottx?tab=repositories"
                target="_blank"
              >
                inúmeros projetos
              </a>{' '}
              desde que comecei a me interessar por programação e tenho hávida
              disposição em contribuir com a comunidade.
            </p>
          </Story>
        </Bio>
        <Skills>
          <SkillsTitle>Habilidades</SkillsTitle>
          <SkillsIcons>
            <li>
              <SiJavascript />
            </li>
            <li>
              <FaReact />
            </li>
            <li>
              <FaNodeJs />
            </li>
            <li>
              <FaGitAlt />
            </li>
          </SkillsIcons>
          <ButtonLink
            theme={{
              color: 'var(--orange)',
              fontSize: `clamp(
                1.375rem * 1.6,
                1.3295454545454546rem * 1.6 + 0.22727272727272727vw,
                1.5rem * 1.6
              )`,
            }}
            href={curriculum}
            download="leonardo-teixeira-curriculo"
          >
            Baixar CV
            <FaCloudDownloadAlt />
          </ButtonLink>
          <SkillsCloud>
            <SkillsList>
              <li
                style={{
                  top: '4.2rem',
                  left: '8%',
                  fontSize: '1.8rem',
                }}
              >
                ES6
              </li>
              <li
                style={{
                  top: '3rem',
                  right: '9%',
                  fontSize: '1.8rem',
                }}
              >
                CSS3
              </li>
              <li
                style={{
                  top: '40%',
                  left: '8%',
                  fontSize: '1.4rem',
                }}
              >
                Tailwind
              </li>
              <li style={{ top: '36%', right: '12%', fontSize: '1.4rem' }}>
                Formik
              </li>
              <li style={{ bottom: '19%', left: '9%', fontSize: '1.6rem' }}>
                Mirage
              </li>
              <li style={{ bottom: '22%', right: '10%', fontSize: '1.8rem' }}>
                Jest
              </li>
              <li
                style={{
                  bottom: '22%',
                  right: '50%',
                  fontSize: '1.6rem',
                  transform: 'translateX(50%)',
                }}
              >
                Sass
              </li>
            </SkillsList>
          </SkillsCloud>
          <Tape className="top-left" />
          <Tape className="bottom-right"></Tape>
        </Skills>
      </HeroWrapper>
    </Container>
  );
};
