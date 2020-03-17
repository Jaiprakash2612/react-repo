import React from 'react';
import { connect } from 'react-redux';
import  FormButton from '../form-button/form-button.component';
import { AddItem } from '../../redux/cart/cart.action'
import './collection-item.styles.scss';

const CollectionItem = ({item, AddItem}) => { 
    const {name, price, imageUrl} = item;
    return (
        <div className='collection-item'>
            <div className='image'
                style={{
                    backgroundImage:`url(${imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <FormButton onClick={() => AddItem(item) } inverted>ADD TO CART</FormButton>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    AddItem: item => dispatch(AddItem(item))
})
export default connect(null,mapDispatchToProps)(CollectionItem);