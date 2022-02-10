import {
  Container,
  Contact,
  Social,
  Form,
  InputWrapper,
  ButtonWrapper,
  Copyright,
} from '@Styles/footer';

// ICONES
import {
  FaTelegramPlane,
  FaGithub,
  FaLinkedin,
  FaCodepen,
  FaRegHeart,
  FaHeart,
} from 'react-icons/fa';

export const Footer = () => {
  return (
    <Container>
      <Contact>
        <span>Contato e Redes Sociais</span>
        <Form>
          <p>Entre em contato</p>
          <InputWrapper>
            <label htmlFor=''>Nome</label>
            <input type='text' placeholder='Fulano Siclano' />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor=''>Email</label>
            <input type='text' placeholder='exemplo@mail.com' />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor=''>Mensagem</label>
            <textarea
              name=''
              id=''
              cols='30'
              rows='10'
              placeholder='Olá, como vai?'
            ></textarea>
          </InputWrapper>
          <ButtonWrapper>
            <button>
              Enviar
              <FaTelegramPlane />
            </button>
          </ButtonWrapper>
        </Form>
        <p>Siga minhas redes sociais e conheça mais sobre o meu trabalho</p>
        <Social>
          <li>
            <a href='#' aria-label='Github'>
              <FaGithub />
            </a>
          </li>
          <li>
            <a href='#' aria-label='LinkedIn'>
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href='#' aria-label='Codepen'>
              <FaCodepen />
            </a>
          </li>
        </Social>
      </Contact>
      <Copyright>
        <span>
          &copy; {new Date().getFullYear()} | Created with&nbsp;
          <FaHeart />
          &nbsp;by Leonardo Teixeira
        </span>
        <a href=''>Source code</a>
      </Copyright>
    </Container>
  );
};
