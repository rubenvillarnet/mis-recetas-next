import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import StyledRecipeList from './RecipeListStyle';

export default function RecipeList({ recipes, type }) {
  return (
    <StyledRecipeList>
      {recipes.map((recipe) => (
        <Link
          key={recipe.slug}
          href={`/${type}/[slug]`}
          as={`/${type}/${recipe.slug}`}
        >
          <a>
            <li className={classNames({ image: !!recipe.image })}>
              {recipe.title}
            </li>
          </a>
        </Link>
      ))}
    </StyledRecipeList>
  );
}
