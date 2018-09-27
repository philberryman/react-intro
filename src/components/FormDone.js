import React from 'react';
import FirstName from './FirstName';
import LastName from './LastName';
import Email from './Email';
import HowAwesome from './HowAwesome';

class Form extends React.Component{
    constructor(){
        super();

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            howAwesome: ''
        }    

        this.handleSubmit = this.handleSubmit.bind(this);
        this.receiveFirstName = this.receiveFirstName.bind(this);
        this.receiveLastName = this.receiveLastName.bind(this);
        this.receiveHowAwesome = this.receiveHowAwesome.bind(this);
        this.receiveEmail = this.receiveEmail.bind(this);
    }


    handleSubmit(event) {
        event.preventDefault();
        console.log(`First Name : ${this.state.firstName}`)
        console.log(`Last Name : ${this.state.lastName}`)
        console.log(`Awesomeness : ${this.state.howAwesome} awesome`);
        console.log(`Email : ${this.state.email}`);
    }

    receiveFirstName(firstName) {
        this.setState ({
            firstName : firstName
        });
    }

    receiveLastName(lastName) {
        this.setState ({
            lastName : lastName
        });
    }

    receiveEmail(email) {
        this.setState ({
            email: email
        });
    }

    receiveHowAwesome(howAwesome) {
        this.setState ({
            howAwesome: howAwesome
        })
    }



    render(){
        return(
            <form className="form" onSubmit={this.handleSubmit}>
                <FirstName receiveFirstName={this.receiveFirstName} firstName={this.state.firstName}/>
                <LastName receiveLastName={this.receiveLastName} lastName={this.state.lastName}/>
                <HowAwesome receiveHowAwesome={this.receiveHowAwesome} howAwesome={this.state.howAwesome}/>
                <Email receiveEmail={this.receiveEmail} email={this.state.email}/>
                <button class="form__submit" onClick={this.handleSubmit}>Click me</button>
            </form>

        );
    }
}

export default Form;