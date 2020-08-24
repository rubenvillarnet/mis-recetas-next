export default function Recipe(props) {
  const { title, ingredients, steps, footnote, image } = props.data;
  return (
    <div>
      <h2>{title}</h2>
      <div>
        <h3>Ingredientes</h3>
        <ul>
          {ingredients.map((ingredient, idx) => (
            <li key={idx}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Pasos</h3>
        <ul>
          {steps.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ul>
      </div>
      {footnote && <p>{footnote}</p>}
      {image && <img src={`/images/${image}`} alt={title} />}
    </div>
  );
}
