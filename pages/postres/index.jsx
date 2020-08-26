import React from 'react';

import { TopNav, Container, RecipeList } from '../../components';
import { getAllRecipes } from '../../services/recipes';

const type = 'postres';

export default function index({ allRecipes }) {
  return (
    <>
      <TopNav title='Segundos platos' current={3} />
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
