import React from 'react';


class Person extends React.Component{
    constructor(){
        super();

        this.state = {text: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        event.preventDefault();
        this.setState({
            text: event.target.value
        })
    }

    render() {
        return (
            <div>
                <p key="person">{this.state.text}</p>
                <input onChange={this.handleChange} type="text"></input>
            </div>
            )      
    
    }
}
    
export default Person;