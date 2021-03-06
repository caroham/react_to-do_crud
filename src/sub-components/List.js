import React, { Component } from 'react';

import EditForm from './EditForm';


class ItemDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
        }
        this.changeEditMode = this.changeEditMode.bind(this);
    }

    changeEditMode() {
        this.setState({editMode: false});
    }

    render() {
        return (<div>{
            this.state.editMode ?
                <EditForm edit={this.props.edit} value={this.props.item.value} idx={this.props.idx} changeEditMode={this.changeEditMode}/>
            :
            <div>
                <button onClick={() => this.props.handleTick(this.props.idx)}>done</button>
                <p>{this.props.item.value}</p>
                <button onClick={() => { 
                    this.setState({
                        editMode: true
                    })
                }}>Edit</button>
                <button onClick={() => this.props.delete(this.props.idx)}>Delete</button>
            </div>
        }</div>)
    }
}


class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: props.filter
        }
    }

    render() {
        console.log("in render, todos: ", this.props.todos, this.props.filter);

        if(this.props.filter==="all"){

            return this.props.todos
            .map((item, idx) => { 
                return (
                    <ItemDetails key={idx} idx={idx} item={item} handleTick={this.props.handleTick} edit={this.props.edit} delete={this.props.delete}/>
                )}
            )

        } else if(this.props.filter==="completed"){

            return this.props.todos
            .filter(todo => todo.ticked === true)
            .map((item, idx) => { 
                return (
                    <ItemDetails key={idx} idx={idx} item={item} handleTick={this.props.handleTick} edit={this.props.edit} delete={this.props.delete}/>
                )}
            )

        } else if(this.props.filter==="active"){
            return this.props.todos
            .filter(todo => todo.ticked === false)
            .map((item, idx) => { 
                return (
                    <ItemDetails key={idx} idx={idx} item={item} handleTick={this.props.handleTick} edit={this.props.edit} delete={this.props.delete}/>
                )}
            )
        } 
    } 

}

export default List;