import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './mealsStyles.css';


const Meals = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
      .then(response => {
        setItems(response.data.meals);
      })
      .catch(error => {
        console.error("There was an error fetching the meals!", error);
      });
  },[]);

  const itemsList = items.map((item, index) => {
    return (
      <div className='meal-item' key={index}>
        <h3>{item.strMeal}</h3>
        <img src={item.strMealThumb} alt={item.strMeal} className='meals-img' />
        <p>Category: {item.strCategory}</p>
        <p>Cuisine: {item.strArea}</p>
        <p>Instructions: {item.strInstructions}</p>
      </div>
    );
  }
  );

  return (
    <div className='container'>
      <h1>Meals</h1>
      <div className='meals-container'>
        {itemsList.length > 0 ? itemsList : <p>No meals found.</p>}
      </div> 
    </div>
  )
}

export default Meals