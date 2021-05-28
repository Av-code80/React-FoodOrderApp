import React, { Fragment } from 'react'

import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';

//8) we must return 2 elements side by side, so use Fragmenet and 
//input MealsSummary & AvailableMeals, then =>9 to App.js
const Meals = () => {
    return <Fragment>
        <MealsSummary />
        <AvailableMeals />

    </Fragment>
}

export default Meals
