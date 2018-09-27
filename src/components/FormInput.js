import React from 'react';

class FormInput extends React.Component {
    constructor(){
        super();
    
        this.handleChange = this.handleChange.bind(this);

   }

handleChange(event){
    this.props.receiveInputValue(event.target.name, event.target.value);
}

render(){
    return(
        <label className="form__label">{this.props.label}
            <input type="text" className="form__input" name={this.props.name} value={this.props.value} onChange={this.handleChange} />
            <p>{this.props.error}</p>
        </label>
    )
}


}

export default FormInput;