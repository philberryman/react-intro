import React from 'react';

class Clicker extends React.Component{
    constructor(){
        super();

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        event.preventDefault();

        alert(this.props.title);
    }

    render(){
        return (
            <div>
                <button onClick={this.handleClick} title={this.props.title}>Click Me</button>
            </div>
        )
    }

}
    
export default Clicker;