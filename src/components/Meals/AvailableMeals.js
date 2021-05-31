import React from 'react'
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

//7) we want to render this array meals as JSX, so need to 
//transform it to an array of JSX element => 8) meals.js

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

  //return here object to jsx code by creating variable and do map
  //and we down the variable to output it
  //11) wrapp ul by Card =>12) to MealItem.js
  //16)Now can map to MealItem instead ListItem--get access id here 
  //by meal.id etc. => 17) to MealItemForm.js
const AvailableMeals = () => {
   const mealsList =  DUMMY_MEALS.map((meal) =>
   <MealItem
   id={meal.id} //it's new
   key={meal.id}   //80) to be sure getting id =>81) for output cart item go Cart.JS
   name={meal.name}
   description={meal.description}
   price={meal.price}
    />);

   return <section className={classes.meals}>
        <Card>
        <ul>
           {mealsList}
        </ul>
        </Card>
    </section>       
    
};

export default AvailableMeals;

//by map we want to return a jsx element which represent this meal item.