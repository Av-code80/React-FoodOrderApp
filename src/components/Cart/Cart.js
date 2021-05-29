import { useContext } from 'react';
//81) import useContext 

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';


//22)make  a div ll be modal component, total amount, 2 actions buttons
//23*)for cartitem make const as example to map all cartitem to cartitem JSX => 24 to Modal.js
const  Cart = (props) => { 
//82)
const cartCtx = useContext(CartContext);
//84) totalAmount
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

//86b)for that, make const
  const hasItems = cartCtx.items.length > 0;

//89) for adding & removing item from cart => 90) go CartItem
const cartItemRemoveHandler = (id) => {
  //98)
  cartCtx.removeItem(id);
};

//95)need to reach to our carCtx & call addItem there & it trigger addItem func
const cartItemAddHandler = (item) => {
  cartCtx.addItem({...item, amount: 1});
};

    const cartItems = (
    <ul className={classes['cart-items']}>
      {/* {[{id: 'c1', name: 'Sushi',amount: 2, price: 12.99}-- 83 don't need it.
        //88) add CartItem here */}
        {cartCtx.items.map((item) => (
          <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)} //{}it trigger when plus button in cart is clicked
        />//bind pre-configur as func for futur execution and let pre-confifure argument
        //that function receive when is executed. both add & remove func need 
        //tobe sure recieve ID or item respectivly.
      ))}
    </ul>
  );

//28)replace div by <modal> and output the card into =>29) App.js 
return (//85) point totalAmount in span--
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span> 
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>} 
      </div>
    </Modal>
    //87){hastItems && }
  );//86a) want to be sure that in order button is only 
  //showing up if we have items in cart 
};
//38) to make onClick={props.onClose} =>39 go to

export default Cart ;


//cart.js must render all cart itemes, display total amount, gives us
//button for leaving & ordering
//* first a cartItem const with it's content then map them
//Cart mus not be inside a div but inside a modal