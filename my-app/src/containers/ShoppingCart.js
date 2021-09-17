import React from 'react'
import List from '../components/List/List'

const ShoppingCart = ( { groceryItems, handleClickEmptyCart}) => {
    return(
        <div>
            <button
            classname="button-primary" onClick={handleClickEmptyCart}>
                Leeg de winkelmand
            </button>
            <List readonly={true} items={groceryItems}/>
        </div>
    )
}

export default ShoppingCart
