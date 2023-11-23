// src/components/RecipeForm.js
import React, { useState } from 'react';
import '../styles/RecipeForm.css';

const RecipeForm = ({ onRecipeSubmit }) => {
  const [newRecipe, setNewRecipe] = useState({
    title: '',
    cuisine: '',
    typeOfDish: '',
    date: '',
    day: '',
    dropdown: '',
    checkboxes: [],
    radio: '',
    textbox1: '',
    textbox2: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRecipe((prevRecipe) => ({ ...prevRecipe, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setNewRecipe((prevRecipe) => ({
      ...prevRecipe,
      checkboxes: checked
        ? [...prevRecipe.checkboxes, name]
        : prevRecipe.checkboxes.filter((checkbox) => checkbox !== name),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRecipeSubmit(newRecipe);
    setNewRecipe({
      title: '',
      cuisine: '',
      typeOfDish: '',
      date: '',
      day: '',
      dropdown: '',
      checkboxes: [],
      radio: '',
      textbox1: '',
      textbox2: '',
    });
  };

  return (
    <div className='form' id="con">
      <h2>Custom Recipe Inquiry.</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row" id="con">
          <label>
           <strong> NAME:</strong> 
            <input type="text" name="title" value={newRecipe.title} onChange={handleInputChange} />
          </label>
          <label>
          <strong>ITEMS:</strong>
            <input type="text" name="cuisine" value={newRecipe.cuisine} onChange={handleInputChange} />
          </label>
        </div>

        <div className="form-row">
          <label>
           <strong>PHONE NUMBER:</strong>
            <input type="text" name="typeOfDish" value={newRecipe.typeOfDish} onChange={handleInputChange} />
          </label>
          <label>
          <strong>DATE:</strong>
            <input type="date" name="date" value={newRecipe.date} onChange={handleInputChange} />
          </label>
        </div>

        <div className="form-row">
          <label>
          <strong>DAY:</strong>
            <input type="text" name="day" value={newRecipe.day} onChange={handleInputChange} />
          </label>
          <label>
          <strong>PAYMENT STATUS:</strong>
            <select name="dropdown" value={newRecipe.dropdown} onChange={handleInputChange}>
              <option value="option1">Cash</option>
              <option value="option2">Card</option>
              <option value="option3">Phone pey</option>
            </select>
          </label>
        </div>

        <div className="form-row">
          <h3>Checkboxes:</h3>
          <div className="checkbox-row">
            <label>
              <input
                type="checkbox"
                name="card"
                checked={newRecipe.checkboxes.includes('card')}
                onChange={handleCheckboxChange}
              />
              Card
            </label>
            <label>
              <input
                type="checkbox"
                name="Payment Done"
                checked={newRecipe.checkboxes.includes('Payment Done')}
                onChange={handleCheckboxChange}
              />
              Payment Done
            </label>
            <label>
              <input
                type="checkbox"
                name="Save Order for Later"
                checked={newRecipe.checkboxes.includes('Save Order for Later')}
                onChange={handleCheckboxChange}
              />
              Save Order for Later
            </label>
          </div>
        </div>

        <div className="form-row">
          <h3>Radio Buttons:</h3>
          <div className="radio-row">
            <label>
              <input
                type="radio"
                name="radio"
                value="option1"
                checked={newRecipe.radio === 'option1'}
                onChange={handleInputChange}
              />
              Option 1
            </label>
            <label>
              <input
                type="radio"
                name="radio"
                value="option2"
                checked={newRecipe.radio === 'option2'}
                onChange={handleInputChange}
              />
              Option 2
            </label>
          </div>
          
          {/* New form row for Queries and Feedback */}
          <div className="form-row">
            <label>
              <strong>QUERIES:</strong>
              <input type="text" name="textbox1" value={newRecipe.textbox1} onChange={handleInputChange} />
            </label>
          </div>

          <div className="form-row">
            <label>
              <strong>FEEDBACK:</strong>
              <input type="text" name="textbox2" value={newRecipe.textbox2} onChange={handleInputChange} />
            </label>
          </div>
        </div>

        <button type="submit">Submit Recipe</button>
      </form>
    </div>
  );
};

export default RecipeForm;
