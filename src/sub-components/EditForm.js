import React, { Component } from 'react';

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
        console.log('form changed! ' + this.state.value);
    }
    
    handleSubmit(event) {
        event.preventDefault()
        this.props.edit(this.props.idx, this.state.value)
        this.props.changeEditMode()
    }
    



    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Edit To Do:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Save" />
            </form>
        </div>
        );
    }
}

export default EditForm;
