import React from 'react';

import { TopNav, Container, RecipeList } from '../../components';
import { getAllRecipes } from '../../services/recipes';

const type = 'primeros';

export default function index({ allRecipes }) {
  return (
    <>
      <TopNav title='Primeros platos' current={1} />
      <main>
        <Container>
          <RecipeList recipes={allRecipes} type={type} />
        </Container>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const allRecipes = getAllRecipes(type);
  return {
    props: {
      allRecipes
    }
  };
}
