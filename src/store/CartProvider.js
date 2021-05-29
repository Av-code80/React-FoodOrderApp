import { useReducer } from 'react';
//51)useReducer for managing state
import CartContext from './cart-context';

//53)defin an object and return it in cartReducer
const defaultCartState = {
    items: [],
    totalAmount: 0  
};
//52**)then outside of component, add cartReducer
const cartReducer = (state, action) => {
//58)now go here to start adding logic for adding a cart item here
    if(action.type === 'ADD') {//here update cartItems and totalAmount
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount 
        + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    return defaultCartState;
};

//let to wrap any components that must get access to this component
const CartProvider = (props) => { //54***) call useReducer, then make deconstruction
   const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    
//43) addItem...get the item and do sth with--remove...get ID do sth wth it
    const addItemToCartHandler = (item) => { 
//57****) start dispatching state by adding items to cart
    dispatchCartAction({type: 'ADD', item: item}) //second item point (item)
    }; //so forwarding item to reducer

    const removeItemFromCartHandler = id => {
//59)
    dispatchCartAction({type: 'REMOVE', id: id});
    }; 

//44)and points them at this function -- 55) carteState need to construct this object
    const cartContext = {//56) replace [] by cartState.items - totalAmount by cartState.totalAmount
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };
//41) make CartContext.provider and props.children 
//45*) now point cartContext as value to provider => 46) to App.js
    return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
    );
};
//51)get item that must be added to cart, and check if item existe!
//and manage state in this component
export default CartProvider;
//42) cartContext is a helper const that is an object, this ll be concrete contexte 
//value that ll be updated over time



//in the end we manage our cart data here
//goal of this file is manage cart-context data and 
//provide that context to all components that want access to it
 //* can use CartProvider component to wrap all components that need to cart
 //at our app all components are rendered in App, Cart need acces to
 //render cartItems, Header, badge too, and meals need Cart, add or remove
 // so can replace CartProvider in App.js

 //** ooutside of component bcz useReducer won't need any surrounding data

 //*** just point it not executed here. in CartProvider, defaultcartState
 //is initial state

//**** dispatchCartAction, an action must be an object ({}) has some properties
//which let to identify that action inside of reducer of function here cartReducer


//forensuring that addItemToCartHandler is called 