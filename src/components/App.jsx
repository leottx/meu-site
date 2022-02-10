import React from 'react';

// COMPONENTES
import { Helmet } from 'react-helmet';
import { Header } from '@Components/Header';
import { Hero } from '@Components/Hero';
import { Portfolio } from '@Components/Portfolio';
import { Blog } from '@Components/Blog';
import { Footer } from '@Components/Footer';

// ESTILOS
import { GlobalStyles } from '@Styles/global';

// IMAGENS
import favicon from '@Images/favicon.png';

export const App = () => {
  return (
    <>
      <Helmet>
        <meta charSet='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='shortcut icon' href={favicon} />
        <title>Leonardo Teixeira</title>
      </Helmet>
      <GlobalStyles />
      <Header />
      <Hero />
      <Portfolio />
      <Blog />
      <Footer />
    </>
  );
};
