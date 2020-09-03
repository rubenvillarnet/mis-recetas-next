import slugify from 'slugify';
import _ from 'lodash';

import primeros from '../data/primeros.json';
import segundos from '../data/segundos.json';
import postres from '../data/postres.json';
import salsas from '../data/salsas.json';

export const allRecipes = {
  primeros: primeros.map((recipe) => {
    return {
      ...recipe,
      slug: slugify(recipe.title)
    };
  }),
  segundos: segundos.map((recipe) => {
    return {
      ...recipe,
      slug: slugify(recipe.title)
    };
  }),
  postres: postres.map((recipe) => {
    return {
      ...recipe,
      slug: slugify(recipe.title)
    };
  }),
  salsas: salsas.map((recipe) => {
    return {
      ...recipe,
      slug: slugify(recipe.title)
    };
  })
};
export const getAllRecipes = (type) => allRecipes[type];

export const getAllRecipesSlugs = (type) => {
  const allRecipesSlugs = getAllRecipes(type).map((recipe) => {
    return {
      params: {
        slug: recipe.slug
      }
    };
  });

  return allRecipesSlugs;
};

export const getRecipeData = (type, slug) => {
  return _.find(getAllRecipes(type), (recipe) => {
    return recipe.slug === slug;
  });
};
