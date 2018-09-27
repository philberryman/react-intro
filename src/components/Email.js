import React from 'react';

class Email extends React.Component {
    constructor(){
    super();

    this.state = {email: ''};

    this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.props.receiveInputValue(event.target.name, event.target.value);
    }

    render(){
        return (
            <label className="form__label">Email:
                <input className="form__input" type="text" name="email" value={this.props.email} onChange={this.handleChange} />
            </label>
        )
    }

}

export default Email;