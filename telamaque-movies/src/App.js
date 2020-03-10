import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

import Header from './components/Header';
import Footer from './components/Footer';
import Config from './Config/Config';

const useStyles = makeStyles(theme => ({
  progress: {
    marginTop: 200,
  },
  progressContainer: {
    textAlign: 'center',
    width: '100%'
  }
}));


const App = () => {

  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [top10Movies, setTop10Movies] = useState([]);
  const [topRest30Movies, setTopRest30Movies] = useState([]);

  const getDataFromApi = async () => {
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
      const responseMoviesConcatenated = responseMovies1.data.results.concat(responseMovies2.data.results);
      const resultTop10Movies = responseMoviesConcatenated.slice(0, 10);
      const resultTopRestMovies = responseMoviesConcatenated.slice(10, 40);

      setCategories(responseCategories.data.genres);
      setTop10Movies(resultTop10Movies);
      setTopRest30Movies(resultTopRestMovies);
      setLoading(false);
    } catch (error) {
      console.error('error:', error);
    }
  }
  useEffect(() => {
    getDataFromApi();
  }, []);

  if (loading) {
    return <div className={classes.progressContainer}>
      <CircularProgress className={classes.progress} />
    </div>;
  }
  return <>
    <Header />
    <div>
    <h1>Top 10 movies</h1>
      <ul>
        {top10Movies.map(movie => <li key={movie.id}>{movie.id}: {movie.title}</li>)}
      </ul>
      <h1>Rest of 30 movies</h1>
      <ul>
        {topRest30Movies.map(movie => <li key={movie.id}>{movie.id}: {movie.title}</li>)}
      </ul>
    </div>
    <Footer />
  </>;
  }
export default App;
