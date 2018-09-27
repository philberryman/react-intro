import React from 'react';

class HowAwesome extends React.Component {
    constructor() {
        super();

        this.state = {howAwesome: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.receiveHowAwesome(event.target.value);
    }

    render() {
        return (
            <label class="form__label"> How Awesome:
                <input class="form__input" type='text' value={this.props.firstName} onChange={this.handleChange} />
            </label>
        )
    }



}

export default HowAwesome;