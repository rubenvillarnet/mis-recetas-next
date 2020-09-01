import React from 'react';

import { getAllRecipesSlugs, getRecipeData } from '../../services/recipes';
import { Recipe, TopNav, Container } from '../../components';

const type = 'postres';

export default function RecipePage({ recipeData }) {
  return (
    <>
      <TopNav title='Postres' current={3} />
      <Container>
        <Recipe data={recipeData} />
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllRecipesSlugs(type);
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const recipeData = await getRecipeData(type, params.slug);
  return {
    props: {
      recipeData
    }
  };
}
