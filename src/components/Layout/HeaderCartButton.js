import React from 'react';

import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
//6) add CartIcon in first span- => 7 to Header.js

const HeaderCartButtom = props => { 
    return <button className={classes.button}>
    <span className={classes.icon}>
        <CartIcon />
    </span>
    <span>Your Cart</span>
    <span className={classes.badge}>3</span>
    </button>

};

export default HeaderCartButtom;


//in this component having an icon, some text, a little badge
//with current number of items in cart, so need 3 span