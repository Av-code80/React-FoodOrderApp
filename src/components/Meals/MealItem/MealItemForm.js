import { useRef, useState } from 'react';
//69) manag error message by useState
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

//17)make input wich is built in Input.js
//21*)replacing <input> by <Input>, then add label prop built in Input.js
//then add input that it's value is an object{{}} and init we have id etc.
//this props content are attributed autpmatcily to {...props.input} in Input.js => 22) to Cart.js
const MealItemForm = props => {
//70)contorl whether this for is valid or not
const [amountIsValid, setAmountIsValid] = useState(true);
//63) useRef()
const amountInputRef = useRef();
//60)for sending event automatically by calling func, preventDefault
//then extract entered amount create ref
const  submitHandler =event => {
    event.preventDefault(event);
//67)let read entered value in submitHandler then convert value string to number
    const enteredAmount = amountInputRef.current.value; //value is always string
    const enteredAmountNumber = +enteredAmount;     //convert etring to number
//68***)
if (
   enteredAmount.trim().length === 0 || 
   enteredAmountNumber < 1 ||
   enteredAmountNumber > 5
   ){ //71)for checking by useState
      setAmountIsValid(false); //and if amountIsValid is false!go at bottom 72
    return; 
   }
//73****)call a function which expect get on props and forward enteredAmountNumber,=>74 to MealItem.js
   props.onAddToCart(enteredAmountNumber); 
};
//61)point submitHandler -- 62)create & assign ref prop to element<Input>
    return (//63) point amountInputRef down => 64 to where we wana receive ref
            // to Input.js
    <form className={classes.form} onSubmit={submitHandler}>
        <Input 
            ref={amountInputRef}
            label="Amount" 
            input={{
            id: 'amount_' + props.id,
            type: 'number',
            min: '0',
            max: '5',
            step: '1',
            defaultValue: '1',
        }} />
        <button>+ Add</button> 
        {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>     
    //72) if AmountIsValid is false, output an error message
    );
};

export default MealItemForm;

//* type in input is built-in element
//min: '1' & max: '5' are validation props which are all props can add by 
//defaullt to input element to ensure amount can be added
//DefaultValue: '1', this is initial value. 
//this content by all it's props can add to any input element
//With the current implementation of MealItemForm, 
//every MealItem <Input /> receives the same id, as I do the

//**60)for ensuring that addItemToCartHandler is called for that need to go place 
//wanna call context object in MealItemForm.js

//***form submission is now only completed or only fully handled if we have valid inputs

//**** bcz the cart item i wanna add needs more data then just entered amount