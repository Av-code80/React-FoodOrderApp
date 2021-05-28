
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

//17)make input wich is built in Input.js
//21*)replacing <input> by <Input>, then add label prop built in Input.js
//then add input that it's value is an object{{}} and init we have id etc.
//this props content are attributed autpmatcily to {...props.input} in Input.js => 22) to Cart.js
const MealItemForm = props => {
    return <form className={classes.form}>
        <Input label="Amount" 
        input={{
            id: 'amount_' + props.id,
            type: 'number',
            min: '0',
            max: '5',
            step: '1',
            defaultValue: '1',
        }} />
        <button>+ Add</button>
    </form>     
    
};

export default MealItemForm;

//* type in input is built-in element
//min: '1' & max: '5' are validation props which are all props can add by 
//defaullt to input element to ensure amount can be added
//DefaultValue: '1', this is initial value. 
//this content by all it's props can add to any input element
//With the current implementation of MealItemForm, every MealItem <Input /> receives the same id, as I do the