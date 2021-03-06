import React from 'react';
import FormButton from '../form-button/form-button.component';
import {connect} from 'react-redux';
import {CartItem} from '../cart-item/cart-item.component'
import { selectCartItems} from '../../redux/cart/cart.selectors'
import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map(cartItem=>(
                <CartItem key={cartItem.id} item={cartItem}/>
            ))}
        </div>
        <FormButton>Checkout</FormButton>
    </div>
);
/** WITHOUT SELECTOR */
// const mapStateToProps = ({cart:{cartItems}}) => ({
//     cartItems
// });

/** WITH SELECTOR */
const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});
export default connect(mapStateToProps)(CartDropdown);