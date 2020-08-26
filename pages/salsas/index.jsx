import React from 'react';

import { TopNav, Container, RecipeList } from '../../components';
import { getAllRecipes } from '../../services/recipes';

const type = 'salsas';

export default function index({ allRecipes }) {
  return (
    <>
      <TopNav title='Salsas' current={4} />
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
