import React from 'react';

class LastName extends React.Component {
    constructor(){
    super();

    this.state = {lastName : ''};

    this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.props.receiveInputValue(event.target.name, event.target.value);
    }

    render(){
        return (
            <label className="form__label"> Last Name:
                <input className="form__input" type="text" name="lastName" value={this.props.lastName} onChange={this.handleChange} />
            </label>
        )
    }

}

export default LastName;