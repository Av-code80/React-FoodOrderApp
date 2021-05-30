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
    if (action.type === 'ADD') {//here update cartItems and totalAmount
        const updatedTotalAmount = 
        state.totalAmount + action.item.price * action.item.amount;    
    //91) check if item is already part of cart !    
     const existingCartItemIndex = state.items.findIndex(
         (item) => item.id === action.item.id
         );
     //92) get existing cartItem
     const existingCartItem = state.items[existingCartItemIndex];
    //93) add updatedItem & updateItems
    let updatedItems;
    //94) if existingCartItem is a thing if it's true, 
    //if yes updatedItem ll be = to new object where we copy existingCartItem
    if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
    } else {//if item is added for first time. we set updatedItems to diff things => 95) Cart.js
        updatedItems = state.items.concat(action.item);
    }

        return {
          items: updatedItems,
          totalAmount: updatedTotalAmount
    };
    };

     //96)check if action type is equal to remove
     if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex(
          (item) => item.id === action.id // that's a it we wanna get rid of
        );
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price; //this line is always corrrect
        let updatedItems;
        if (existingItem.amount === 1) {
          updatedItems = state.items.filter(item => item.id !== action.id); 
          //want to keep all items, but wanna remove items with id which we get on our action here
          //with this check make sure all items with no equal id to action id are kept
          //but one item where item id is equal to id action, is to be removed id
          // for that one item we return false here, return false then w'll remove it from newly generated array
        } else {
        //97)if amount is greater than one, don't wanna remove item from array
        //just wanna update the amount => 98) carte.js
          const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
          updatedItems = [...state.items];
          updatedItems[existingCartItemIndex] = updatedItem;
        } //we override one of these items, then override ols item in array which is updted amount
    
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
//59*****) => 60) to MealItemForm.js
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
//value that ll be updated over time.

//in the end we manage our cart data here. 
//Goal of this file is manage cart-context data and 
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


//*****60)for ensuring that addItemToCartHandler is called for that need to go place 
// wanna call context object in MealItemForm.js}.