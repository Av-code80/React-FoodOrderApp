import  { Fragment } from 'react';
import Header from './components/Layout/Header'; 
//4)instead of h2 we use <Header> in return
//5) in return section turn div into Fragmenet => 6 to CartIcon

function App() {
  return (
    <Fragment>
      <Header />
    </Fragment>
  );
}

export default App;
