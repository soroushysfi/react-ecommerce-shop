import { Link } from 'react-router-dom';
import { auth } from './../../firebase/firebase.utils'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.styles.scss';

import { createStructuredSelector } from 'reselect'

import CartIcon from '../cart-icon/cart-icon.component'
import {connect} from 'react-redux';
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'
const Header = ({currentUser, hidden}) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='options' to='/shop'>
                    Shop
                </Link>
                <Link className='option' to='/shop'>
                    Contact
                </Link>
                {
                    currentUser ? 
                    <div className='option' onClick={() => auth.signOut()}>Sign Out</div>
                    :
                    <Link className='option' to='/signin'>Sign In</Link>
                }
                <CartIcon />
            </div>
            { hidden ? <CartDropdown /> : null}
        </div>
    )
}

const mapStateToProps = (state) => createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
