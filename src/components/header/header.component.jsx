import React from 'react';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {Link} from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

const Header = ({user}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'></Logo>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'> SHOP </Link>
            <Link className='option' to='/shop'> CONTACT </Link>
            {user ? <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>: 
            <Link className='option' to='/signin'>SIGN IN</Link>}
        </div>
    </div>
);

const mapStateToProps = state => ({
    user : state.user.currentUser
});

export default connect(mapStateToProps)(Header);