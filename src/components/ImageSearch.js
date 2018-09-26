import React from 'react';
import ImageDisplay from './ImageDisplay';


class ImageSearch extends React.Component {
    constructor () {
        super();

        this.state={
            search: "",
            results: []        
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    unsplashFetch(query){
        fetch (`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=d7ab4c73aab34ac3669753c9065df8434e7cf8bdf9cdaf9022eba3aae46d4a07`)
        .then (response => response.json())
        .then (body => {
            console.log(body.results);
            this.setState({
                results: body.results
            });
        });     
    }
    

    handleSubmit(event) {
        event.preventDefault();
        this.unsplashFetch(this.state.search);
    }

    handleChange(event) {
        this.setState({
            search: event.target.value
        });
    }

    handleClick(event) {

    }

    render(){
        return <div>dddd
            <form className="search" onSubmit = {this.handleSubmit}>
                <input className = "search__input" onChange = {this.handleChange} type="text" name="" id=""/>

                <button  className = "search__submit" type="submit">Search</button>
            </form>
            <ul className="results">{this.state.results.map(image => <ImageDisplay key={image.id} url={image.urls.thumb}/>)}</ul>
        </div>
    }

}

export default ImageSearch;