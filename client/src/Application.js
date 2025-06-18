import { useState, useEffect } from "react";

import callApi from './api/callApi';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import movies from './sample/temp';

function TrendingBanner () {
  return (<></>)
}

function MovieRow () {
  return (<></>)
}

function Application() {
  //const [movies=[], setMovies] = useState([]);
  // useEffect(() => {

  // }, [])

  return (
    <div>
      <Navbar movies={movies}/>
      <TrendingBanner movies={movies.length? movies : []}/>
      <MovieRow title="Popular releases"/>
      <Footer/>
    </div>
  );
}

export default Application;
