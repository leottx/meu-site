// ESTILOS
import {
  Container,
  BlogWrapper,
  BlogContainer,
  BlogGrid,
  LatestArticle,
  Article,
  Content,
  CreatedAt,
} from '@Styles/blog';

// COMPONENTES
import { CensorBar } from '@Components/CensorBar';

// ICONES
import { FaRegCalendarAlt } from 'react-icons/fa';

// IMAGENS
import selfPortrait from '@Images/leonardo-portrait.jpg';

export const Blog = () => {
  return (
    <Container id='artigos'>
      <BlogWrapper>
        <LatestArticle>
          <figure>
            <img src={selfPortrait} alt='Autoretrato de Leonardo' />
          </figure>
          <Content>
            <span>Breve em destaque</span>
            <h4>
              <a href='#artigos'>
                <CensorBar text='lorem ipsum amet' />
              </a>
            </h4>
            <CreatedAt>
              <FaRegCalendarAlt />
              <time datetime='2022-03-05'>05 de Março, 2022</time>
            </CreatedAt>
            <p className='latest'>
              <CensorBar
                text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
                dignissimos tenetu facilis nisi ipsum voluptatem rerum. Earum
                illo aliquid sapiente dolorem assumenda, corrupti architecto
                cupiditate fuga quia accusamus ullam nesciunt!'
              />
            </p>
          </Content>
        </LatestArticle>

        <BlogContainer>
          <span>Artigos futuros</span>
          <BlogGrid>
            <Article>
              <Content>
                <h4>
                  <a href='#artigos'>
                    <CensorBar text='Consectur amet' />
                  </a>
                </h4>
                <CreatedAt>
                  <FaRegCalendarAlt />
                  <time datetime='2022-12-03'>12 de Março, 2022</time>
                </CreatedAt>
                <p>
                  <CensorBar text='Nunc eget gravida purus. Nam eget felis sem. Proin et mi consequat, ultricies tellus quis, blandit lorem. Phasellus nec sapien ut nisi auctor mattis. Aenean ultricies vehicula nunc. Suspendisse nec nunc vel nibh convallis sollicitudin vel nec ex.' />
                </p>
              </Content>
            </Article>
            <Article>
              <Content>
                <h4>
                  <a href='#artigos'>
                    <CensorBar text='lorem sit amet' />
                  </a>
                </h4>
                <CreatedAt>
                  <FaRegCalendarAlt />
                  <time datetime='2022-19-03'>19 de Março, 2022</time>
                </CreatedAt>
                <p>
                  <CensorBar text='Nunc et molestie dui, ac efficitur eros. Mauris maximus nisl turpis, at tempus tellus tempus quis. Quisque malesuada sagittis vulputate. Vivamus aliquam justo vel arcu semper, sed facilisis diam mattis.' />
                </p>
              </Content>
            </Article>
            <Article>
              <Content>
                <h4>
                  <a href='#artigos'>
                    <CensorBar text='fontes fluidas' />
                  </a>
                </h4>
                <CreatedAt>
                  <FaRegCalendarAlt />
                  <time datetime='2022-26-03'>26 de Março, 2022</time>
                </CreatedAt>
                <p>
                  <CensorBar text='Vivamus sit amet condimentum eros, id mattis sapien. Proin eget auctor ligula, a malesuada augue. Fusce fermentum odio nec diam porttitor, ac aliquet nunc condimentum.' />
                </p>
              </Content>
            </Article>
          </BlogGrid>
        </BlogContainer>
      </BlogWrapper>
    </Container>
  );
};
