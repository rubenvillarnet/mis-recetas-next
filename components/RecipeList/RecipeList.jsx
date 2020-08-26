import React from 'react';
import Link from 'next/link';

import StyledRecipeList from './RecipeListStyle';

export default function RecipeList({ recipes, type }) {
  return (
    <StyledRecipeList>
      {recipes.map((recipe) => (
        <li key={recipe.slug}>
          <Link href={`/${type}/[slug]`} as={`/${type}/${recipe.slug}`}>
            <a>{recipe.title}</a>
          </Link>
        </li>
      ))}
    </StyledRecipeList>
  );
}
