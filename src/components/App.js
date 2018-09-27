import React from 'react';
import Movie from './Movie.js';
import Person from './Person';
import CreditCardInput from './CreditCardInput';
import ImageSearch from './ImageSearch';
import Form from './Form';

const movies = [
  {id:1,title:"True Romance", year:1993},
  {id:2,title:"Pulp Fiction", year:1994},
  {id:3,title:"Zoolander", year:2001},
  {id:4,title:"The Royal Tenenbaums", year:2001}
]

class App extends React.Component{
  render(){
    return (
      <div>
        {/* <CreditCardInput />
        <Movie movies={movies}/>
        <Person /> */}
        {/* <ImageSearch /> */}
        <Form />
      </div>
    );
  }
}

export default App;
