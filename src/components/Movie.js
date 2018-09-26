import React from 'react';


class Movie extends React.Component{
    // constructor(){
    //     super();

    //     this.handleClick = this.handleClick.bind(this);
    // }

    handleClick(event, movie){
        // event.preventDefault();

        alert(movie.title);
    }

    render() {
        return (
                this.props.movies.map(movie =>
                     (<div key={movie.id} onClick={(event) => this.handleClick(event, movie)}>
                        <h2 className="movie">{movie.title}</h2>
                        <p className="year">{movie.year}</p>
                    </div>)
            )      
        );
    }
}
    
export default Movie;