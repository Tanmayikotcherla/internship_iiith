import React from 'react';
import '../styles/Table.css'; 

const PopularRecipesTable = () => {
  const recipes = [
    { rank: 1, recipe: 'Spaghetti Bolognese', cuisine: 'Italian', typeOfDish: 'Pasta' },
    { rank: 2, recipe: 'Chicken Parmesan', cuisine: 'Italian', typeOfDish: 'Chicken' },
    { rank: 3, recipe: 'Tacos', cuisine: 'Mexican', typeOfDish: 'Tacos' },
    { rank: 4, recipe: 'Chocolate Chip Cookies', cuisine: 'American', typeOfDish: 'Dessert' },
    { rank: 5, recipe: 'Chicken Alfredo', cuisine: 'Italian', typeOfDish: 'Pasta' },
    { rank: 6, recipe: 'Sushi', cuisine: 'Japanese', typeOfDish: 'Seafood' },
    { rank: 7, recipe: 'Guacamole', cuisine: 'Mexican', typeOfDish: 'Dip' },
    { rank: 8, recipe: 'Pizza Margherita', cuisine: 'Italian', typeOfDish: 'Pizza' },
    { rank: 9, recipe: 'Chicken Tikka Masala', cuisine: 'Indian', typeOfDish: 'Chicken' },
    { rank: 10, recipe: 'Caesar Salad', cuisine: 'American/Italian', typeOfDish: 'Salad' },
  ];

  return (
    <div className='fav' id="fav">
      <h2>FAVOURITES</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ border: '2px solid #ddd', padding: '8px', textAlign: 'left' }}>Rank</th>
            <th style={{ border: '2px solid #ddd', padding: '8px', textAlign: 'left' }}>Recipe</th>
            <th style={{ border: '2px solid #ddd', padding: '8px', textAlign: 'left' }}>Cuisine</th>
            <th style={{ border: '2px solid #ddd', padding: '8px', textAlign: 'left' }}>Type of Dish</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <tr key={recipe.rank}>
              <td style={{ border: '2px solid #ddd', padding: '8px' }}>{recipe.rank}</td>
              <td style={{ border: '2px solid #ddd', padding: '8px' }}>{recipe.recipe}</td>
              <td style={{ border: '2px solid #ddd', padding: '8px' }}>{recipe.cuisine}</td>
              <td style={{ border: '2px solid #ddd', padding: '8px' }}>{recipe.typeOfDish}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PopularRecipesTable;
