import React from "react";
import GroceryList from "./containers/GroceryList";
import ShoppingCart from "./containers/ShoppingCart";


class Container extends React.Component{
    constructor( props){
        super(props)
        this.state ={
            groceryInput: "",
            groceryItems: [
                {id: 1, title: "brood"},
                {id: 2, title: "water"},
                {id: 3, title: "melk"},
            ],
            shoppingListItems: [{id:1, title: "melk", amount: 2}]
        }
    }

    render(){
        const addNewShoppingListItem = itemTitle => {
            const newShoppingItem ={
                id:this.state.shoppingListItems.length +1,
                title: itemTitle,
                amount: 1
            }

            this.setState(prevState =>{
                const newlist = prevState.shoppingListItems.concat(newShoppingItem)
                return{
                    shoppingListItems : newlist
                }
            })
    }

  const addAmountToItem = itemTitle => {
     
      const shoppingList = [...this.state.shoppingListItems];
      const newList = shoppingList.map(shoppingItem => {
        if (shoppingItem.title === itemTitle) {
          shoppingItem.amount++;
        }
        return shoppingItem;
      })
      this.setState({ shoppingListItems: newList })
    }

const handleClickGroceryItem = event => {
    const clickedItem = event.target.getAttribute("value")
    const currentShoppingList = this.state.shoppingListItems
    const shoppingListItem = currentShoppingList.filter(
        item=> item.title === clickedItem
    )
    shoppingListItem.length === 0 ? addNewShoppingListItem(clickedItem): addAmountToItem(clickedItem)
}


const emptyCart = () => {
    this.setState({shoppingListItems: []})
}
const addGrocery = grocery => {
    const item = { id: this.state.groceryItems.length + 1, title:grocery}
    this.setState({groceryItems: this.state.groceryItems.concat(item)})
}
return (
      <div className="container">
        <div className="groceries-list groceries">
          <h1>Boodschappenlijst</h1>
          <GroceryList
            addGrocery={addGrocery}
            groceryItems={this.state.groceryItems}
            handleClickGroceryItem={handleClickGroceryItem}
          />
        </div>
        <div className="groceries-list basket">
          <h1>Winkelmand</h1>
          <ShoppingCart
            handleClickEmptyCart={emptyCart}
            groceryItems={this.state.shoppingListItems}
          />
        </div>
      </div>
    );
  }
}

export default Container