// components/Table.js
import React from 'react';
import './styles/Table.css';

const Table = ({ data }) => {
  return (
    <div className="table-container" id="fav">
      <table>
        <thead>
          <tr>
            <th>Recipe ID</th>
            <th>Recipe Name</th>
            <th>Cuisine</th>
            <th>Main Ingredient</th>
            <th>Difficulty Level</th>
          </tr>
        </thead>
        <tbody>
          {data.map((recipe) => (
            <tr key={recipe.id}>
              <td>{recipe.id}</td>
              <td>{recipe.name}</td>
              <td>{recipe.cuisine}</td>
              <td>{recipe.mainIngredient}</td>
              <td>{recipe.difficulty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
