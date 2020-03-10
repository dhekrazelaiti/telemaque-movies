import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
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
        height: 300,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundColor: '#f4f4f4b3',
        backgroundPosition: 'center',
    },
    slideTitle: {
        textAlign: 'center',
        position: 'fixed',
        top: 160,
        margin: '0 auto',
        zIndex: 999,
        fontSize: 25,
        fontWeight: 'bold',
        border: '2px solid rgba(255, 255, 255, 0.15)',
        width: '198px',
        background: 'rgb(206, 206, 206)',
        opacity: '0.77',
    },
    slideCategories: {
        float: 'right',
        position: 'absolute',
        bottom: 5,
        width: '100%'
    },
    chip: {
        marginLeft: 10
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
