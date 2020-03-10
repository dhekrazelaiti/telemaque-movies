import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import { Slide } from 'react-slideshow-image';
import ItemsCarousel from 'react-items-carousel';
import Config from '../../Config/Config';

const useStyles = makeStyles(theme => ({
    slideContainer: {
        margin: 'auto',
        padding: 0,
        maxWidth: '100%',
        marginTop: 50
    },
    slideElement: {
        display: 'flex',
        alignItems: 'center',
        backgroundSize: 'contain !important',
        justifyContent: 'center',
        backgroundColor: '#f4f4f4b3 !important',
        backgroundRepeat: 'no-repeat !important',
        backgroundPosition: 'center !important'
    },
    slideTitle: {
        padding: 20,
        textAlign: 'center',
        //position: 'fixed',
        top: 0,
        margin: '0 auto',
        zIndex: 999,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    slideCategories: {
        float: 'right',
        position: 'absolute',
        bottom: 5,
        width: '100%'
    },
    slideContent:{
        //border: '2px solid red',
        width: '100%',
        height: '339px',
    },
    chip: {
        marginLeft: 10,
        color: 'rgba(0, 0, 0, 0.87)',
        backgroundColor: '#ccc',
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

const TopRest30 = ({data, categories}) => {

    const classes = useStyles();
    const [activeItemIndex, setActiveItemIndex] = useState(0);

    return <div className={classes.slideContainer}>
        <h1>Top rest 30 movies</h1>
        <ItemsCarousel
        infiniteLoop={false}
        gutter={12}
        activePosition={'center'}
        chevronWidth={60}
        disableSwipe={false}
        alwaysShowChevrons={false}
        numberOfCards={3}
        slidesToScroll={3}
        outsideChevron={false}
        showSlither={false}
        firstAndLastGutter={false}
        activeItemIndex={activeItemIndex}
        requestToChangeActive={value => setActiveItemIndex(value)}
        rightChevron={'>'}
        leftChevron={'<'}
        >
            {data.map(movie => {
                let movieCategories = [];
                movie.genre_ids.map(genre => {
                        const foundCategory = categories.find(x => x.id === genre);
                        if(foundCategory) {
                            movieCategories.push(foundCategory.name);
                        }
                        return genre;
                    }
                );
                return <div>
                    <div className={classes.slideTitle}>{movie.title}</div>
                    <div className={classes.slideContent}>
                    <div className={classes.slideElement}
                        style={{
                            height: 339,
                            background: `url(${Config.ApiImages}/${movie.poster_path})`
                        }}
                    >
                    </div>
                    
                        <div className={classes.slideCategories}>
                        {movieCategories.map(movieCategory => <Chip label={movieCategory} className={classes.chip} color="primary" />)}
                    </div>
                    </div>
                    
                </div>
                }
            )}
        </ItemsCarousel>
    </div>;

};

export default TopRest30;