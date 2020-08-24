import React from 'react';
import Link from 'next/link';

import { getAllRecipes } from '../../services/recipes';

const type = 'primeros';

export default function index({ allRecipes }) {
  return (
    <div>
      <h1>{type}</h1>
      <ul>
        {allRecipes.map((recipe) => (
          <li key={recipe.slug}>
            <Link href={`/${type}/[slug]`} as={`/${type}/${recipe.slug}`}>
              <a>{recipe.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
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
