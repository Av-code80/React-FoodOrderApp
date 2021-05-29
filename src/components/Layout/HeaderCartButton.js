import { useContext } from 'react';
//47) add useContxte here and use it in header cart button, need to
//import cartContext here
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';


//6) add CartIcon in first span- => 7) to availableMeals
//36)to handle button set props.ocClick then pass to App.js for 37) for onClose
const HeaderCartButton = (props) => {
//48*) call useContext & pass this cart contxte to it

const cartCtx = useContext(CartContext);
//49**) so can use this to output our number of cart items length
//and use reduce() that let us to transform an array of data into a single value
const numberOfCartItems = cartCtx.items.reduce(
  (curNumber, item) => {
      return curNumber + item.amount;
}, 
0);

    return (
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>  
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>         //50) number of 3 output {numberOfCartItems} =>51)cartProvider
    );   
  }; 
  
  export default HeaderCartButton;

//in this component having an icon, some text, a little badge
//with current number of items in cart, so need 3 span

//*to get access to this cartContext which is managed in App.js by
//cartProvider-- by using useContext here the headerCartbutton ll be reevaluted
//by React whenever context changes, when cartProvider is updated befor

//** for that it takes 2 arguments: 1. is a function 2. starting value
//here using 0. First argument which is a function takes 2 arguments itself
//curNumber is different for every item that calling it and it's 
//a number of value during execution, 0 ll be result of what you return 
//in previous execution.