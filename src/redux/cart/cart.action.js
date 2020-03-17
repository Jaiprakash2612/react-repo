import cartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: cartActionTypes.TOOGLE_CART_HIDDEN
});

export const AddItem = item => ({
    type:cartActionTypes.ADD_ITEM,
    payload: item
});
