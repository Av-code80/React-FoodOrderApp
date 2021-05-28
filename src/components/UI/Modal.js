import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

//24*) make backdrop & modalOverlay components ,
const Backdrop = (props) => {
    return <div className={classes.backdrop} />;
};
//25**)inseid of 2div put props.children
const ModalOverlay = (props) => {
    return (
    <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
     </div>
   );
};         
//as there are 2 portals here,it needs to creat a helper const

const portalElement = document.getElementById('overlays');

//26***) need also to return markup, make Fragmenet then output 2 dynamic portal expression
//27)need also to know where to portal: id="overlays" is in HTML file 
//portalElement is as second argument to both created portal calls. => 28) to Cart.js
const Modal = props => {
    return (
    <Fragment>
    {ReactDOM.createPortal(<Backdrop />, portalElement)}
    {ReactDOM.createPortal(
      <ModalOverlay>{props.children}</ModalOverlay>,
      portalElement
    )}
  </Fragment>
);
};

export default Modal;




//* special markup, use React portal for backdrop, behind modal overlay
//and want to render modal overlay itself by React Portal to use that 
//component wherever i want, 
//to render portal, need to go to html file in return from html,
// can create backdrop & overlay then use Portal. create 2 seperate components
//for that. Both recieave prop bcz both recieve data

//** at the end props.children ll be actual content passed between 
// opening and closing tags by a component where modal is getting used.

//*** 2 expersions call the create Portal method which is bult into React
//in theses experssions. not the React library itself, but React DOM library, by React team