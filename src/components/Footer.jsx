import { useState, useEffect } from 'react';

import {
  Container,
  Contact,
  Header,
  Content,
  Social,
  Form,
  InputWrapper,
  ButtonWrapper,
  Copyright,
} from '@Styles/footer';

import { Button } from '@Styles/global';

// ICONES
import {
  FaTelegramPlane,
  FaGithub,
  FaLinkedin,
  FaCodepen,
  FaHeart,
} from 'react-icons/fa';

import spinner from '@Images/icon-spinner.svg';

// IMAGENS
import selfPortrait from '@Images/leonardo-portrait.jpg';

export const Footer = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const inputHandler = (e, fieldTitle) => {
    switch (fieldTitle) {
      case 'name':
        setFormData((data) => ({ ...data, name: e.target.value }));
        return;
      case 'email':
        setFormData((data) => ({ ...data, email: e.target.value }));
        return;
      case 'subject':
        setFormData((data) => ({ ...data, subject: e.target.value }));
      case 'message':
        setFormData((data) => ({ ...data, message: e.target.value }));
        return;
      default:
        return;
    }
  };

  const sendEmail = (data) => {
    fetch('https://formsubmit.co/ajax/contact.leotx@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsLoading((prev) => !prev);
      })
      .catch((error) => console.log(error));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoading(!isLoading);
    sendEmail(formData);
  };

  return (
    <Container id="contato">
      <Contact>
        <Header>
          <figure>
            <img src={selfPortrait} alt="Autoretrato de Leonardo" />
          </figure>
          <Content>
            <span>Contato e redes sociais</span>
            <h4>Bora trocar uma ideia?!</h4>
            <p className="latest">
              Não se acanhe, seja qual for o assunto ficarei feliz pela
              mensagem. Mande agora mesmo sua proposta, sugestão ou
              questionamento. Bora conversar!
            </p>
          </Content>
        </Header>
        <Form onSubmit={(e) => submitHandler(e)}>
          <p>Entre em contato</p>
          <InputWrapper>
            <label htmlFor="">Nome</label>
            <input
              type="text"
              name="name"
              placeholder="Fulano Siclano"
              onChange={(e) => inputHandler(e, 'name')}
              required
              onInvalid={(e) =>
                e.target.setCustomValidity('Insira um valor válido')
              }
              onInput={(e) => e.target.setCustomValidity('')}
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              placeholder="exemplo@mail.com"
              onChange={(e) => inputHandler(e, 'email')}
              required
              onInvalid={(e) =>
                e.target.setCustomValidity('Insira um valor válido')
              }
              onInput={(e) => e.target.setCustomValidity('')}
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="">Assunto</label>
            <input
              type="text"
              name="subject"
              placeholder="Criação de site"
              onChange={(e) => inputHandler(e, 'subject')}
              required
              onInvalid={(e) =>
                e.target.setCustomValidity('Insira um valor válido')
              }
              onInput={(e) => e.target.setCustomValidity('')}
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="">Mensagem</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Olá, como vai?"
              onChange={(e) => inputHandler(e, 'message')}
              required
              onInvalid={(e) =>
                e.target.setCustomValidity('Insira um valor válido')
              }
              onInput={(e) => e.target.setCustomValidity('')}
            ></textarea>
          </InputWrapper>

          <ButtonWrapper>
            <Button
              theme={{
                fontSize: `clamp(
                  1.375rem * 1.6,
                  1.3048245614035088rem * 1.6 + 0.3508771929824561vw,
                  1.625rem * 1.6
                )`,
                color: '#0168b8',
              }}
              disabled={isLoading}
              freeze={isLoading}
            >
              {isLoading ? (
                <>
                  Enviando <img src={spinner} alt="loading" />
                </>
              ) : (
                <>
                  Enviar <FaTelegramPlane />
                </>
              )}
            </Button>
          </ButtonWrapper>
        </Form>
        <p>Siga minhas redes sociais e conheça mais sobre o meu trabalho</p>
        <Social>
          <li>
            <a
              href="https://github.com/leottx"
              target="_blank"
              aria-label="Github"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/leotx/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://codepen.io/ltteixeira/"
              target="_blank"
              aria-label="Codepen"
            >
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
        <a href="https://github.com/leottx/meu-site" target="_blank">
          Source code
        </a>
      </Copyright>
    </Container>
  );
};
