import { React, useState, useEffect } from 'react';
import axios from 'axios';
import RecipeItem from '../components/RecipeItem';
import Header from '../components/Header';
import './List.css';

const List = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/recipes');
        setRecipes(response.data.recipes); // Update this line
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        alert('Falhaem obter as receitas. Tente novamente.');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="list-page">
      <Header title="Receitas da Vovó" />
      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <div className="container-recipes">
          <ul>
            {recipes.map((recipe) => (
              <RecipeItem key={recipe.id} recipe={recipe} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default List;