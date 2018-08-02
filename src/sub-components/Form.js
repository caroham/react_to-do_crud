import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state={
            value: ''
        }
        console.log("in constructore, this: ", this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log("in handlechange, this: ", this);
        this.setState({value: event.target.value});
        console.log('form changed! ' + this.state.value);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.add(this.state.value);
        this.setState({value: ''});
    }

    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    To Do:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Add" />
            </form>
        </div>
        );
    }
}

export default Form;
