import React from 'react';

// COMPONENTES
import { Helmet } from 'react-helmet';

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
      <h1>Hello World</h1>
    </>
  );
};
