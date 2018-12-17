import React, { Component } from 'react';
import TodoItems from './components/todoItems/todoItems';
import AddItems from './components/addItems/addItems';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  
  state = {
    items : [
      {id:1, name: 'ahmed', age: 23},
      {id:2, name: 'ali', age: 24},
      {id:3, name: 'amr', age: 25}
    ]
  }

  deleteItem = (id) => {
     let items = this.state.items.filter(item => {
       return item.id !== id
     })
     this.setState({items})
  } 

  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items})
  }


  render() {
    return (
      <div className="App app-container">
        <h2>Todolist App</h2>
       <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
       <AddItems addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
