import { useContext, useEffect, useState } from "react";
//100) useEffcet
//47) add useContxte here and use it in header cart button, need to
//import cartContext here
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

//6) add CartIcon in first span- => 7) to availableMeals
//36)to handle button set props.onClick then pass to App.js for 37) for onClose
const HeaderCartButton = (props) => {
  //102) use effect
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);
  //48*) call useContext & pass this cart contxte to it

  const { items } = cartCtx;
  //49**) so we can use this to output our number of cart items length
  //and use reduce() that let us to transform an array of data into a single value
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  //99) add animation whenever add or remove item to carte -- add css animation
  //${btnIsHighlighted ? classes.bump : ''} at this way:
  //for setting animation use useEffect

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ""
  }`;
  //101)call useEffect with dependencies -- wnna change button classes to
  //include bump animation class then set a timer that remove tha class again
  //so if it's added again in future. so need to useState, bcz need to reevalute adn re-render this component when animation class is added
  useEffect(() => {
    //103)
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    //104) remove class after animation finished by setting timer here
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300); //play 300 s, duration of animation in css file, so after that duration a function ll trigger
    //105)if return a function useEffect, it ll be called automatically as
    //cleanup func by React, so when effect rerun we clear timer
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button> //50) number of 3 output {numberOfCartItems} =>51)cartProvider
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
//curNumber is different for every item that calling it and it is
//a number of value during execution, 0 ll be result of what you return
//in previous execution.
