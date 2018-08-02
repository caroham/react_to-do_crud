import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state={
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
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
