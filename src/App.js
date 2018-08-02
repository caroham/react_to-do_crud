import React, { Component } from 'react';
import './App.css';

import Form from './sub-components/Form';
import List from './sub-components/List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      itemsLeft: 0,
      itemsLeftStr: "items left",
      filter: "all"
    }
    this.edit = this.edit.bind(this);
    this.add = this.add.bind(this);
    this.handleTick = this.handleTick.bind(this);
  }

  add(val) {
    this.setState({todos: [...this.state.todos, {value: val, ticked: false}]});
    this.setState({itemsLeft: this.state.itemsLeft+1});
    console.log('in handle submit, itemsleft: ', this.state.itemsLeft);
    this.state.itemsLeft === 1 ? this.setState({itemsLeftStr: 'item left'}) : this.setState({itemsLeftStr: 'items left'});
  }

  edit(idx, val) {
    let newTodos = this.state.todos;
    newTodos[idx]['value'] = val;
    this.setState({todos: newTodos});
  }

  handleTick(idx) {
    let newTodos = this.state.todos;
    newTodos[idx].ticked = true;
    this.setState({todos: newTodos});
    if(this.state.itemsLeft > 0) {
      this.setState({itemsLeft: this.state.itemsLeft-1});
      this.state.itemsLeft === 1 ? this.setState({itemsLeftStr: 'item left'}) : this.setState({itemsLeftStr: 'items left'});
    }
    console.log('in handle tick, itemsleft: ', this.state.itemsLeft);
  }

  handleFilter(spec) {
    this.setState({filter: spec});
  }

  render() {
    return (
      <div className="App">
        <Form value={this.state.value} add={this.add}/>
        <List todos={this.state.todos} handleTick={this.handleTick} edit={this.edit} filter={this.state.filter}/>
        <div className="bottom-bar">
          <p>{this.state.itemsLeft + " " + this.state.itemsLeftStr}</p>
          <div className="filter">
            <button onClick={() => this.handleFilter("all")}>All</button>
            <button onClick={() => this.handleFilter("active")}>Active</button>
            <button onClick={() => this.handleFilter("completed")}>Completed</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
