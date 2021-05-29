import { useState } from 'react';

import Header from './components/Layout/Header'; 
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

//4)instead of h2 we use <Header> in return
//5) in return section turn div into Fragmenet => 6) to CartIcon
//9) set <Main> which is a difault Html5 element. => 10) to Card.js
function App() { //31 make useState
  const [cartIsShown, setCartIsShown] = useState(false);
//31*) call setCartIsShown inside it &make hideCarHandler then need to 
//use cartIsShown state & this 2 func are called
const showCartHandler = () => {
  setCartIsShown(true);
};

const hideCartHandler =() => {
  setCartIsShown(false);
};
//46)so can replace Fragmenet by CartProvider and can remove Fragment in import up =>47) to HEaderCartButton
//33)button Header must be called,so can point showCartHandler in Header =>34)to Header.js
  return ( //30) add Cart 
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>} 
      <Header onShowCart={showCartHandler} />
    <main>
      <Meals />
    </main>
    </CartProvider>
  );
}

export default App;
//37)for handling backdrop modal when click on close button, 
//now need too handle it by going throw 38) cart.js closing button
//32**)render Cart it conditionnally by wrapping it in {} to evalute dynamic expression
//then access cartIsShown && to render Cart, if that's truthy and not render if falsy

//why useState here for modal and backdrop ? bcz Cart is import in App.js
//* make a function for return function-function must be called when button is
//clicked. About cartIsShown, we wanna render Cart component conditionally
//**don't excute here just point it