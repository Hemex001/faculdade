import React from 'react';

const RecipeItem = ({ recipe }) => {
  return (
    <li>
      <h2>{recipe.name}</h2>
      <p><b>Ingredientes:</b> {recipe.ingredients.join(', ')}</p>
      <p><b>Tempo de Preparação:</b> {recipe.prepTimeMinutes} minutos</p>
      <p><b>Cozinha: {recipe.cuisine}</b></p>
      <hr />
    </li>
    
  );
};

export default RecipeItem;