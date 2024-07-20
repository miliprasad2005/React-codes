import React from 'react'

import MovieProvider from './DynamicContext.jsx/MovieProvider';
import MovieList from './DynamicContext.jsx/MovieList';

const App = () => {
  return (
    <div>

      <h1 style={{background:"blue",color:"black"}}>Here is the example of ContextApi, I have used to make Dark and Light mode Theme</h1>
 
      <br/>
      <br/>
      <br/>
      <h1 style={{background:"blue",color:'black'}}>Here is the example of Dynamic context, I send the the movie data from MovieContext to MovieList, and render the Data's </h1>

      <MovieProvider>
        <MovieList/>
      </MovieProvider>


    </div>
  )
}

export default App