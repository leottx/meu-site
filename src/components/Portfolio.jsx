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
  CardBtn,
} from '@Styles/portfolio';

export const Portfolio = () => {
  return (
    <Container>
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
          <Card>
            <figure>
              <img src={imgPlaceholder} alt='Capa da postagem' />
            </figure>
            <CardWrapper>
              <TagList>
                <Tag>HTML</Tag>
                <Tag>SCSS</Tag>
                <Tag>JavaScript</Tag>
              </TagList>
              <h3>
                <a href='#'>ReactJS Todo List</a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At sint
                nam explicabo! Natus, nihil nobis fuga dolores, sunt odio
                doloremque similique minima soluta quae magni ipsa. Quibusdam
                qui consequatur rerum!
              </p>
              <CardBtn>
                <span>Ver o projeto</span>
                <FaArrowCircleRight />
              </CardBtn>
            </CardWrapper>
          </Card>
        </ProjectList>
      </ProjectWrapper>
    </Container>
  );
};
