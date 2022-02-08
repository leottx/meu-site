// ESTILOS
import {
  Container,
  BlogWrapper,
  BlogGrid,
  LatestArticle,
  Article,
  Header,
  LatestContent,
  Content,
  CreatedAt,
} from '@Styles/blog';

// IMAGENS
import selfPortrait from '@Images/leonardo-portrait.jpg';

export const Blog = () => {
  return (
    <Container>
      <BlogWrapper>
        <LatestArticle>
          <figure>
            <img src={selfPortrait} alt='Autoretrato de Leonardo' />
          </figure>
          <span>Latest Post</span>
          <Content>
            <h4>
              <a href=''>O que é uma Fake API?</a>
            </h4>
            <p>
              <CreatedAt datetime='2022-02-04'>February 18, 2022 — </CreatedAt>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
              dignissimos tenetur facilis nisi ipsum voluptatem rerum. Earum
              illo aliquid sapiente dolorem assumenda, corrupti architecto
              cupiditate fuga quia accusamus ullam nesciunt!
            </p>
          </Content>
        </LatestArticle>
        <BlogGrid>
          <span>Past articles</span>
          <Article>
            <Content>
              <h4>
                <a href=''>Article Title Placeholder</a>
              </h4>
              <p>
                <CreatedAt datetime='2022-02-04'>
                  February 18, 2022 —{' '}
                </CreatedAt>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
                dignissimos tenetur facilis nisi ipsum voluptatem rerum. Earum
                illo aliquid sapiente dolorem assumenda, corrupti architecto
                cupiditate fuga quia accusamus ullam nesciunt!
              </p>
            </Content>
          </Article>
        </BlogGrid>
      </BlogWrapper>
    </Container>
  );
};
