
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
//6) add CartIcon in first span- => 7) to availableMeals
//36)to handle button set props.ocClick then pass to App.js for 37) for onClose
const HeaderCartButton = (props) => {
    return (
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>3</span>
      </button>
    );
  };
  
  export default HeaderCartButton;


//in this component having an icon, some text, a little badge
//with current number of items in cart, so need 3 span