import React, { Fragment } from 'react'; // it let access to Ract.Fragement

import HeaderCartButtom from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpeg';
//3) can use img as source by binding source dynamically =>4) to App.js
import classes from './Header.module.css';
//7 removing button and replace HeaderCartButton in return

const Header = props => { //1.bulding header with built in Fragmenet as a wrapper, only root element
    //2)having 2 sibling element:header & div for holding image
    return (
    <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButtom onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="A table full of delicious food!"/>
        </div>
    </Fragment>
    );
};
//35)pass onclick on button and now need to handle onClick prop that we receive
export default Header; //=>36)to HeaderCartButton

//we need 2 blocs of code
//1.Header bloc(toolbar) //2.Image bloc(below the header), they could be seperated in 2 componenets
//inserting image from server : <https://some-url.com/to-some-image.jpg>
