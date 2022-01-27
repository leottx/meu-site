// DOCUMENTOS
import curriculum from '@Docs/leonardo-curriculo.pdf';

// IMAGENS
import selfPortrait from '@Images/leonardo-portrait.jpg';

// ESTILOS
import {
  Container,
  HeroWrapper,
  HeroTitleWrapper,
  HeroPicWrapper,
  HeroSkillWrapper,
} from '@Styles/hero';

// ICONES
import {
  FaMapMarkerAlt,
  FaReact,
  FaSass,
  FaGitAlt,
  FaCloudDownloadAlt,
} from 'react-icons/fa';

import { SiJavascript, SiHtml5, SiCss3, SiTailwindcss } from 'react-icons/si';

const skillIcons = [
  SiHtml5,
  SiCss3,
  SiJavascript,
  FaReact,
  FaSass,
  SiTailwindcss,
  FaGitAlt,
];

export const Hero = () => {
  return (
    <Container>
      <HeroWrapper>
        <HeroTitleWrapper>
          <h1>
            Olá, meu nome é Leonardo. <br /> Sou um Dev Front-end fascinado por
            programação e tecnologia.
          </h1>
          <p>
            <a href='https://goo.gl/maps/vW8wjjtLBNP5ctK77' target='_blank'>
              Limeira - SP, Brasil
              <FaMapMarkerAlt />
            </a>
          </p>
        </HeroTitleWrapper>
        <HeroPicWrapper>
          <img src={selfPortrait} alt='Retrato do Leonardo' />
        </HeroPicWrapper>
        <HeroSkillWrapper>
          <h2>Habilidades</h2>
          <ul>
            {skillIcons.map((Icon, index) => {
              return (
                <li key={`skill-${index}`}>
                  <Icon />
                </li>
              );
            })}
          </ul>
          <a href={curriculum} download='leonardo-teixeira-curriculo'>
            Baixar CV
            <FaCloudDownloadAlt />
          </a>
        </HeroSkillWrapper>
      </HeroWrapper>
    </Container>
  );
};
