import {Fragmenet} from 'react'; // it let access to Ract.Fragement
import './Header.Module.css';

const Header = props => { //1.bulding header with built in Fragmenet as a wrapper, only root element
    //2)having 2 sibling element:header & div for holding image
    return<Fragmenet>
        <header>
            <h1>ReactMeals</h1>
        </header>
        <div></div>
    </Fragmenet>
};

export default Header;

//we need 2 blocs of code
//1.Header bloc(toolbar) //2.Image bloc(below the header), they could be seperated in 2 componenets