import React from 'react'

const ListItem = ({clickItem, readonly, item}) =>{
    return(
        <div>
            <li
            key= {item.id}
            className="list-item"
            onClick={clickItem}
            value={item.title}
            >
            <span>{item.title || ""}</span>

            <span>{readonly? `Hoeveelheid : ${item.amount}`: ""}</span>

            </li>
        </div>
    )
}
export default ListItem