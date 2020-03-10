import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Slide } from 'react-slideshow-image';
import Config from '../../Config/Config';

const useStyles = makeStyles(theme => ({
    slideContainer: {
        width: '70%',
        margin: 'auto'
    },
    slideElement: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: 300
    },
    slideTitle: {
        padding: 20,
        fontSize: 20,
        backgroundColor: '#efefef',
        textAlign: 'center'
    }
  }));

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
  }


const TopRest30 = ({data}) => {

    const classes = useStyles();


    return <div>
        <h1>Top rest 30 movies</h1>
        <div className={classes.slideContainer}>
                <Slide {...properties}>
                    {data.map(movie => 
                        <div>
                            <div className={classes.slideElement} style={{'backgroundImage': `url(${Config.ApiImages}/${movie.poster_path})`}}>
                            <span className={classes.slideTitle}>{movie.title}</span>
                        </div>
                        </div>
                    )}
                </Slide>
        </div>

    </div>;

};

export default TopRest30;
