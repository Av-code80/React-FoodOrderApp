import React from 'react';
import Modal from '../UI/Modal';

import classes from './Cart.module.css';

//22)make  a div ll be modal component, total amount, 2 actions buttons
//23*)for cartitem make const as example to map all cartitem to cartitem JSX => 24 to Modal.js
const  Cart = props => { 
    const cartItems = <ul className={classes['cart-items']}>{[{
        id: 'c1', 
        name: 'Sushi',
        amount: 2, 
        price: 12.99}
        ].map((item) => <li>{item.name}</li>)}</ul>;

//28)replace div by <modal> and output the card into =>29) App.js 
return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
//38) to make onClick={props.onClose} =>39 go to

export default Cart ;


//cart.js must render all cart itemes, display total amount, gives us
//button for leaving & ordering
//* first a cartItem const with it's content then map them
//Cart mus not be inside a div but inside a modal