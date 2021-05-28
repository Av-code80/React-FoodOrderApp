import React from 'react';

import classes from './Card.module.css';

//10) create a wrapper is a general reusable UI component, 
//div and props.children => 11) to Available to use this Card to wrap <ul>
const Card = props => {
return <div className={classes.card}>{props.children}</div>
};

export default Card;


//Wrapper can contain all elements ini it by props.children is 
//in the end used inside Card