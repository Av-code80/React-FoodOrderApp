import React from 'react';


const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},           //let say recieves item must be added
    removeItem: (id) => {}              
});

export default CartContext;

//41) initialise this context with default data that giv better auto completion


//we need know if data or items can added to cart ? 
//can use context for overall data. on mealItems need to update the cart
//in cartcomponent need to output it,

//Steps : 1.get context generally created 2.no ll also need to manage that context
//in some components with useState or use reducer
//this context can be updated that we manage that in another file