import React from 'react'
import List from '../components/List/List'
import InputField from  "../components/InputField"

const GroceryList = ({ groceryItems, handleClickGroceryItem, addGrocery}) => {
    return(
        <div>
            <InputField onSubmit = {addGrocery} />
            <List items={groceryItems} handleClickItem = {handleClickGroceryItem}/>

        </div>
    )
}

export default GroceryList