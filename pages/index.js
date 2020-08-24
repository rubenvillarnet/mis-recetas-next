import React from 'react';

import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-size: 2rem;
`;
export default function Home() {
  return (
    <div>
      <Head>
        <title>Mis recetas</title>
      </Head>

      <StyledTitle>Mis recetas</StyledTitle>
      <Link href='/primeros'>
        <a>Primeros</a>
      </Link>
      <Link href='/segundos'>
        <a>Segundos</a>
      </Link>
      <Link href='/postres'>
        <a>Postres</a>
      </Link>
      <Link href='/salsas'>
        <a>Salsas</a>
      </Link>
    </div>
  );
}
