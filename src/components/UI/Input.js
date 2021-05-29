import React from 'react'
//64) make sure do it
import classes from './Input.module.css';

//19*)make div, label, text, input/.- label text must be configurable
//setting htmlFor prop. defin id prop to get it to Input**
const Input = React.forwardRef((props, ref) => {
    //66)use ref inside component to forward it in input ref={ref}, then forwad it in MealItemForm => 67) MealItemForm
    return (
     <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref} {...props.input} />
     </div>   
   );  
});
//65) wrap component func with ref
//20)trick to pass other configuration data to input as props by spread{...} => 21) to MealItemForm
export default Input;


//*both htmlFor and class are reserved keywords
//we expect that for this input componenet when it's used, we get a label prop 
//with label text and input prop which holds an 
//object with configuration data like => id
//**spread ensure that all key value pairs in input object which recieved
//on props input are added as props to input. so this input recieves object data
// from out of this component and we can remve also id={props.input.id} from input if like