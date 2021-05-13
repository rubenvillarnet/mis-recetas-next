import React from 'react';

import { getAllRecipesSlugs, getRecipeData } from '../../services/recipes';
import { Recipe, TopNav } from '../../components';

const type = 'blw';

export default function RecipePage({ recipeData }) {
  return (
    <>
      <TopNav title='BLW' current={5} isSubpage />
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
