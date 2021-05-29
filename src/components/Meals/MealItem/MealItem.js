import { useContext } from 'react';
//77) so import context
import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
//79) need to import carContext
import CartContext from '../../../store/cart-context';

//12) markup <li>, wrap around every meal item. 
//all these items ll be rendered in un ul list in AvailableMeams.js
//13*) h3 {props.name} inside div for name of meals assigning by props. bcz we render MealsItems
//for all the meals in DUMMY_MEALS array, then make {props.description}
const MealItem = props => {
 //78)call useContext and pass cartContext here to set connexion
 const cartCtx = useContext(CartContext);
 
//14*)make const to format price toFixed(2) make sure render 2 decimal places
const price = `$${props.price.toFixed(2)}`;
//74)
    const addToCartHandler = amount => { //76)now want to reach out to my context
     //79) can now call cartCtx.addItem
     cartCtx.addItem({
         id: props.id,          //now need to be sure if get also props.id! 80)go AvailableMeal
         name: props.name,
         amount: amount,
         price: props.price     //price as a number not price which is in up
     });   
    };

    return <li className={classes.meal}>

        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
            </div>
        <div><MealItemForm onAddToCart={addToCartHandler}/>
        </div>
    </li>
}//75) point AddToCarthandler at onAddToCart={}
//15)in second div make form for entering amount then add to Cart Button
//it's "extra componenet" => 16) to AvailableItem
export default MealItem;
//18) output <MealItemForm> at second div => 19 to Input.js


//about props.name here 13), need to make sure the name used to access the data
// are prop names ll be used in Available meals for passing down the data.

//14*)first* to output character dollar sign and other inject dynamic contect
//into this template props.price.toFixed(2)

//MealItem allow us to add items to the cart