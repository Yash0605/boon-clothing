import React from 'react';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.components';
import CartDropDown from'../cart-dropdown/cart-dropdown.components';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {currentUserSelector} from '../../redux/user/user.selector';
import {createStructuredSelector} from 'reselect';

const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'></Logo>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'> SHOP </Link>
            <Link className='option' to='/shop'> CONTACT </Link>
            {currentUser ? <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>: 
            <Link className='option' to='/signin'>SIGN IN</Link>}
            <CartIcon></CartIcon>
        </div>
        {
            hidden ? null : <CartDropDown/>
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser : currentUserSelector,
    hidden : selectCartHidden
});

export default connect(mapStateToProps)(Header);