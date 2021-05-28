import  { Fragment } from 'react';
import Header from './components/Layout/Header'; 
import Meals from './components/Meals/Meals';
//4)instead of h2 we use <Header> in return
//5) in return section turn div into Fragmenet => 6) to CartIcon
//9) set <Main> which is a difault Html5 element. => 10) to Card.js
function App() {
  return (
    <Fragment>
      <Header />
    <main>
      <Meals />
    </main>
    </Fragment>
  );
}

export default App;
