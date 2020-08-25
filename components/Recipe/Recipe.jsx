import React from 'react';

export default function Recipe(props) {
  const { data } = props;
  const { title, ingredients, steps, footnote, image } = data;
  return (
    <div>
      <h2>{title}</h2>
      <div>
        <h3>Ingredientes</h3>
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Pasos</h3>
        <ul>
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>
      </div>
      {footnote && <p>{footnote}</p>}
      {image && <img src={`/images/recipes/${image}`} alt={title} />}
    </div>
  );
}
