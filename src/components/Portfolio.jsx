import { ThemeProvider } from 'styled-components';

// ICONES
import { FaArrowCircleRight } from 'react-icons/fa';

import imgPlaceholder from '@Images/teste.png';

// ESTILOS
import {
  Container,
  ProjectWrapper,
  ProjectAbout,
  ProjectList,
  Card,
  CardWrapper,
  TagList,
  Tag,
  BtnWrapper,
} from '@Styles/portfolio';

import { ButtonLink, ButtonLinkEmpty } from '@Styles/global';

// ICONES
import { FaGlobeAmericas, FaGithub } from 'react-icons/fa';

export const Portfolio = () => {
  return (
    <Container id="portfolio">
      <ProjectWrapper>
        <ProjectAbout>
          <span>Projetos e Contribuições</span>
          <h2>Meus Projetos como Dev Front End</h2>
          <p>
            Conheça minha forma de pensar e organizar ideias. Cada projeto desta
            lista representa um passo da minha evolução técnica. Sinta-se à
            vontade para explorar e contribuir.
          </p>
        </ProjectAbout>
        <ProjectList>
          <ThemeProvider
            theme={{
              firstColor: 'var(--orange)',
              secondColor: 'var(--teal)',
              thirdColor: 'var(--orange-light)',
            }}
          >
            <Card
              firstColor="var(--orange)"
              secondColor="var(--teal)"
              thirdColor="var(--orange-light)"
            >
              <figure>
                <img src={imgPlaceholder} alt="Capa da postagem" />
              </figure>
              <CardWrapper>
                <TagList>
                  <Tag>React</Tag>
                  <Tag>Styled Components</Tag>
                  <Tag>GitHub API</Tag>
                </TagList>
                <h3>
                  <a
                    href="https://github.com/leottx/react-github-user-search"
                    target="_blank"
                  >
                    Buscador de Usuários do GitHub
                  </a>
                </h3>
                <p>
                  Página para busca de usuários do GitHub. As pesquisas bem
                  sucedidas retornam um painel com informações sobre o perfil
                  incluindo os respectivos repositórios.
                </p>
                <BtnWrapper>
                  <ButtonLink
                    theme={{
                      color: 'var(--orange)',
                      fontSize: `clamp(
                        1.25rem * 1.6,
                        1.1798245614035088rem * 1.6 + 0.3508771929824561vw,
                        1.5rem * 1.6
                      )`,
                    }}
                    href="https://leottx.github.io/react-github-user-search/"
                    target="_blank"
                  >
                    <span>Website</span>
                    <FaGlobeAmericas />
                  </ButtonLink>
                  <ButtonLinkEmpty
                    theme={{
                      color: 'var(--orange)',
                      fontSize: `clamp(
                        1.25rem * 1.6,
                        1.1798245614035088rem * 1.6 + 0.3508771929824561vw,
                        1.5rem * 1.6
                      )`,
                    }}
                    href="https://github.com/leottx/react-github-user-search"
                    target="_blank"
                  >
                    <span>Github</span>
                    <FaGithub />
                  </ButtonLinkEmpty>
                </BtnWrapper>
              </CardWrapper>
            </Card>
          </ThemeProvider>
          <ThemeProvider
            theme={{
              firstColor: 'var(--magenta)',
              secondColor: 'var(--teal)',
              thirdColor: 'var(--magenta-light)',
            }}
          >
            <Card
              firstColor="var(--magenta)"
              secondColor="var(--teal)"
              thirdColor="var(--orange-light)"
            >
              <figure>
                <img src={imgPlaceholder} alt="Capa da postagem" />
              </figure>
              <CardWrapper>
                <TagList>
                  <Tag>Styled Components</Tag>
                  <Tag>React</Tag>
                </TagList>
                <h3>
                  <a
                    href="https://github.com/leottx/react-job-listing-app"
                    target="_blank"
                  >
                    Painel de Vagas Tech
                  </a>
                </h3>
                <p>
                  Simulador de plataforma para busca de vagas na área de TI.
                  Nele é possível filtrar os anúncios utilizando tags, nome da
                  empresa, posição pretendita ou ainda compor a pesquisa com
                  ambas as opções para obter resultados mais objetivos.
                </p>
                <BtnWrapper>
                  <ButtonLink
                    theme={{
                      color: 'var(--magenta)',
                      fontSize: `clamp(
                        1.25rem * 1.6,
                        1.1798245614035088rem * 1.6 + 0.3508771929824561vw,
                        1.5rem * 1.6
                      )`,
                    }}
                    href="https://leottx.github.io/react-job-listing-app/"
                    target="_blank"
                  >
                    <span>Website</span>
                    <FaGlobeAmericas />
                  </ButtonLink>
                  <ButtonLinkEmpty
                    theme={{
                      color: 'var(--magenta)',
                      fontSize: `clamp(
                        1.25rem * 1.6,
                        1.1798245614035088rem * 1.6 + 0.3508771929824561vw,
                        1.5rem * 1.6
                      )`,
                    }}
                    href="https://github.com/leottx/react-job-listing-app"
                    target="_blank"
                  >
                    <span>Github</span>
                    <FaGithub />
                  </ButtonLinkEmpty>
                </BtnWrapper>
              </CardWrapper>
            </Card>
          </ThemeProvider>
          <ThemeProvider
            theme={{
              firstColor: 'var(--blue)',
              secondColor: 'var(--teal)',
              thirdColor: 'var(--blue-light)',
            }}
          >
            <Card>
              <figure>
                <img src={imgPlaceholder} alt="Capa da postagem" />
              </figure>
              <CardWrapper>
                <TagList>
                  <Tag>HTML</Tag>
                  <Tag>CSS</Tag>
                  <Tag>JavaScript</Tag>
                </TagList>
                <h3>
                  <a href="https://github.com/leottx/b8one-desafio-front-end">
                    Desafio E-commerce
                  </a>
                </h3>
                <p>
                  Teste da primeira etapa eliminatória do curso de
                  Desenvolvimento Front End promovido pela{' '}
                  <a href="https://www.b8one.academy/">b8one.academy</a>. Nesse
                  projeto foi implementado o layout responsivo de um e-commerce
                  segundo uma proposta do Figma.
                </p>
                <BtnWrapper>
                  <ButtonLink
                    theme={{
                      color: 'var(--blue)',
                      fontSize: `clamp(
                        1.25rem * 1.6,
                        1.1798245614035088rem * 1.6 + 0.3508771929824561vw,
                        1.5rem * 1.6
                      )`,
                    }}
                    href="https://leottx.github.io/b8one-desafio-front-end/"
                    target="_blank"
                  >
                    <span>Website</span>
                    <FaGlobeAmericas />
                  </ButtonLink>
                  <ButtonLinkEmpty
                    theme={{
                      color: 'var(--blue)',
                      fontSize: `clamp(
                        1.25rem * 1.6,
                        1.1798245614035088rem * 1.6 + 0.3508771929824561vw,
                        1.5rem * 1.6
                      )`,
                    }}
                    href="https://github.com/leottx/b8one-desafio-front-end"
                    target="_blank"
                  >
                    <span>Github</span>
                    <FaGithub />
                  </ButtonLinkEmpty>
                </BtnWrapper>
              </CardWrapper>
            </Card>
          </ThemeProvider>
        </ProjectList>
      </ProjectWrapper>
    </Container>
  );
};
