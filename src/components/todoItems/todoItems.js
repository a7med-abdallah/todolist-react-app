import React from 'react';

const TodoItems = (props) => {

    const {items, deleteItem} = props;
    const length = items.length;
    const ListItems = length ?  items.map(item => {
        return (
            <div key={item.id}>
                <span>{item.name}</span>
                <span>{item.age}</span>
                <span className="delete" onClick={ () => {deleteItem(item.id)}}>&times;</span>
            </div>
        )
    }) : (
        <p>No items to Delete !!</p>
    )


    return(
        <div className="listItems">
            <div className="table-head">
                <span>Name</span>
                <span>Age</span>
                <span>Action</span>
            </div>
            {ListItems}
        </div>
    )
} 

export default TodoItems;