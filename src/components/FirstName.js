import React from 'react';

class FirstName extends React.Component {
    constructor(){
    super();

    this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.props.receiveInputValue(event.target.name, event.target.value);
    }

    render(){
        return (
            <label className="form__label"> First Name:
                <input className="form__input" name="firstName" type="text" value={this.props.firstName} onChange={this.handleChange} />
            </label>
        )
    }

}

export default FirstName;


