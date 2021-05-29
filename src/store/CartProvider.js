import CartContext from './cart-context';
import cartContext from './cart-context';

//41) make CartContext.provider and props.children 
//let to wrap any components that must get access to this component
const CartProvider = props => { 
//43) addItem...get the item and do sth with--remove...get ID do sth wth it
    const addItemToCartHandler = item => {}; 
    
    const removeItemFromCartHandler = id => {}; 

//44)and points them at this function
    const cartContext = {
        items: [],
        totalamount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };
//45) now point cartContext as value to provider
    return <CartContext.provider value={cartContext}>
        {props.children}
    </CartContext.provider>
};

export default CartProvider;
//42) cartContext is a helper const that is an object, this ll be concrete contexte 
//value that ll be updated over time


//goal of this file is manage cart-context data and 
//provide that context to all components that want access to it
