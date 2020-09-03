import React from 'react';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';

import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head>
        <title>En mi casa se cocina así</title>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/images/icons/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/images/icons/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/images/icons/favicon-16x16.png'
        />
        <link rel='manifest' href='/manifest.webmanifest' />
        <link
          rel='mask-icon'
          href='/images/icons/safari-pinned-tab.svg'
          color='#5bbad5'
        />
        <link rel='shortcut icon' href='/images/icons/favicon.ico' />
        <meta name='msapplication-TileColor' content='#00aba9' />
        <meta
          name='msapplication-config'
          content='/images/icons/browserconfig.xml'
        />
        <meta name='theme-color' content='#ffffff' />
        <meta
          name='Description'
          content='Estas son las recetas que hemos ido recopilando con los años.'
        />
        <meta property='og:type' content='article' />

        <meta property='og:title' content='En mi casa se cocina así' />

        <meta
          property='og:description'
          content='Estas son las recetas que hemos ido recopilando con los años.'
        />

        <meta property='og:image' content='/images/og_image.jpg' />

        <meta property='og:url' content='http://mis-recetas.rubenvillar.net/' />

        <meta property='og:site_name' content='Mis recetas' />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
