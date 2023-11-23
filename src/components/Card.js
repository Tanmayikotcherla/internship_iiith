import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Card.css';

const Card = ({ recipe }) => {
  const { title, image, ingredients, instructions } = recipe;

  return (
    <div className="card" id="Menu">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <div className="card-details">
          <h4>Ingredients:</h4>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h4>PRICE:</h4>
          <p>{instructions}</p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    instructions: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card; // Make sure to have only one export statement
