import React from 'react';
import {connect} from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg';
import './cart-icon.styles.scss';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'

const cartIcon = ({toggleCartHidden, ItemCount}) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{ItemCount}</span>
        </div>
    );
}
const mapDispatchProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

/** WITHOUT SELECTORS */
// const mapStateToProps = ({cart:{cartItems}}) => ({
//     ItemCount: cartItems.reduce((accumalatedQuantiy,cartItem)=>(
//         accumalatedQuantiy+cartItem.quantity
//     ),0) 
// });

/** WITH SELECTORS */
const mapStateToProps = state => ({
    ItemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps,mapDispatchProps)(cartIcon);