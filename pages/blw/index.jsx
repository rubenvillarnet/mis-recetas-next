import React from 'react';

import { TopNav, Container, RecipeList } from '../../components';
import { getAllRecipes } from '../../services/recipes';

const type = 'blw';

export default function index({ allRecipes }) {
  return (
    <>
      <TopNav title='BLW' current={5} />
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
