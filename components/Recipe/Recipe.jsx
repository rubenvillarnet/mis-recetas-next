import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';

import StyledRecipe from './RecipeStyle';

export default function Recipe({ data }) {
  const { title, ingredients, steps, footnote, image } = data;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledRecipe>
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
      {image && (
        <div
          onClick={() => setIsOpen(true)}
          onKeyPress={() => setIsOpen(true)}
          role='button'
          tabIndex='0'
          className='img-container'
        >
          <img src={`/images/recipes/${image}`} alt={title} />
        </div>
      )}
      {isOpen && (
        <Lightbox
          mainSrc={`/images/recipes/${image}`}
          onCloseRequest={() => setIsOpen(false)}
        />
      )}
    </StyledRecipe>
  );
}
