import React from 'react';
import FirstName from './FirstName';
import LastName from './LastName';
import Email from './Email';
import FormInput from './FormInput';

class Form extends React.Component{
    constructor(){
        super();

        this.state = {
            firstName: {value:'', valid: true},
            lastName: '',
            email: '',

        }    

        this.handleSubmit = this.handleSubmit.bind(this);
        // this.receiveFirstName = this.receiveFirstName.bind(this);
        // this.receiveLastName = this.receiveLastName.bind(this);
        // this.receiveEmail = this.receiveEmail.bind(this);
        this.receiveInputValue = this.receiveInputValue.bind(this);
    }


    handleSubmit(event) {
        event.preventDefault();
        const errorMessage =  this.state.firstName.length < 1?  "Empty" : "";

        console.log(`First Name : ${this.state.firstName}`)
        console.log(`Last Name : ${this.state.lastName}`)
        console.log(`Email : ${this.state.email}`);
    }

    // receiveFirstName(firstName) {
    //     this.setState ({
    //         firstName : firstName
    //     });
    // }

    // receiveLastName(lastName) {
    //     this.setState ({
    //         lastName : lastName
    //     });
    // }

    // receiveEmail(email){
    //     this.setState({
    //         email: email
    //     });
    // }


    receiveInputValue (inputName, value) {
        this.setState ({
            [inputName] : value
        }, ()=>console.log(this.state))
    }

    render(){

const lastNameCaps = this.state.lastName.toUpperCase();

        return(
            <form className="form" onSubmit={this.handleSubmit}>

                <FormInput receiveInputValue={this.receiveInputValue} label="First Name" name="firstName" value={this.state.firstName} error={errorMessage}/>

                <FormInput receiveInputValue={this.receiveInputValue} label="Last Name" name="lastName" value={lastNameCaps}/>

                <FormInput receiveInputValue={this.receiveInputValue} label="Email" name="email" value={this.state.email}/>


                <button className="form__submit" onClick={this.handleSubmit}>Click me</button>
            </form>

        );
    }
}

export default Form;