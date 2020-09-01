import React from 'react';

import { getAllRecipesSlugs, getRecipeData } from '../../services/recipes';
import { Recipe, TopNav } from '../../components';

const type = 'primeros';

export default function RecipePage({ recipeData }) {
  return (
    <>
      <TopNav title='Primeros platos' current={1} />
      <Recipe data={recipeData} />
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
