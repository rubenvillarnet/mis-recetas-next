import React from 'react';

import StyledRecipe from './RecipeStyle';
import Container from '../Container/Container';

export default function Recipe({ data }) {
  const { title, ingredients, steps, footnote, image } = data;
  return (
    <StyledRecipe>
      <Container>
        <h1>{title}</h1>
        <div className='recipe-content'>
          <div className='ingredients'>
            <h3>Ingredientes</h3>
            <ul>
              {ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className='steps'>
            <h3>Pasos</h3>
            <ul>
              {steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </div>
        </div>
        {footnote && <p className='footnote'>{footnote}</p>}
      </Container>
      {image && (
        <div className='img-container'>
          <img src={`/images/recipes/${image}`} alt={title} />
        </div>
      )}
    </StyledRecipe>
  );
}
