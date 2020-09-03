import React from 'react';
import Link from 'next/link';
import CountUp from 'react-countup';

import StyledIndex from '../styles/pages-styles/index';
import { Container } from '../components';
import { allRecipes } from '../services/recipes';

export default function Home({ recipes }) {
  const recipesCount = (recipesNumber) => (
    <span className='recipes-count'>
      <CountUp end={recipesNumber} duration={2} />
    </span>
  );

  return (
    <StyledIndex>
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
              <a>
                {recipesCount(recipes.primeros.length)}
                Primeros platos
              </a>
            </Link>
            <Link href='/segundos'>
              <a>{recipesCount(recipes.segundos.length)}Segundos platos</a>
            </Link>
            <Link href='/postres'>
              <a>{recipesCount(recipes.postres.length)}Postres</a>
            </Link>
            <Link href='/salsas'>
              <a>{recipesCount(recipes.salsas.length)}Salsas</a>
            </Link>
          </nav>
        </Container>
      </main>
    </StyledIndex>
  );
}

export async function getStaticProps() {
  return {
    props: {
      recipes: allRecipes
    }
  };
}
