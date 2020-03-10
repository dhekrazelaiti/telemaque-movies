import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';


import Config from './Config/Config';

const App = () => {

  useEffect(() => {
    const getMostPopularMovies = async () => {
      try {
        const urlCategories = `${Config.ApiUrl}/${Config.ApiVersion}/genre/movie/list?api_key=${Config.ApiKey}`;
        const urlMovies1 = `${Config.ApiUrl}/${Config.ApiVersion}/movie/popular?api_key=${Config.ApiKey}`;
        const urlMovies2 = `${Config.ApiUrl}/${Config.ApiVersion}/movie/popular?api_key=${Config.ApiKey}&page=2`;
        const responseCategories = await axios.get(urlCategories);
        const responseMovies1 = await axios.get(urlMovies1);
        const responseMovies2 = await axios.get(urlMovies2);

        if(responseCategories.status !== 200 || responseMovies1.status !== 200 || responseMovies2.status !== 200) {
          throw new Error('Error while requesting API');
        }

        console.log('responseCategories: ', responseCategories.data);
        console.log('responseMovies1: ', responseMovies1.data);
        console.log('responseMovies2: ', responseMovies2.data);
        const responseMoviesConcatenated = responseMovies1.data.results.concat(responseMovies2.data.results);
        const top10Movies = responseMoviesConcatenated.slice(0, 10);
        const topRestMovies = responseMoviesConcatenated.slice(10, 40);
        console.log('top10Movies: ', top10Movies);
        console.log('topRestMovies: ', topRestMovies);
      } catch (error) {
        console.error('error:', error);
      }
    }
    getMostPopularMovies();
  }, []);

  return <>
    <Header />
    <div>
      <h1>Movies page</h1>

    </div>
    <Footer />
  </>;
};


export default App;
