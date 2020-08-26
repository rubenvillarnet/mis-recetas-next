import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import StyledIndex from '../styles/pages-styles/index';
import { Container } from '../components';

export default function Home() {
  return (
    <StyledIndex>
      <Head>
        <title>En mi casa se cocina así</title>
      </Head>
      <header>
        <Container>
          <h1>En mi casa se cocina así</h1>
        </Container>
      </header>
      <main>
        <Container>
          <p>Estas son las recetas que hemos ido recopilando con los años.</p>
          <nav>
            <Link href='/primeros'>
              <a>Primeros platos</a>
            </Link>
            <Link href='/segundos'>
              <a>Segundos platos</a>
            </Link>
            <Link href='/postres'>
              <a>Postres</a>
            </Link>
            <Link href='/salsas'>
              <a>Salsas</a>
            </Link>
          </nav>
        </Container>
      </main>
    </StyledIndex>
  );
}
