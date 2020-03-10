import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Config from '../../Config/Config';
import { truncate } from '../../helpers/Utils';


const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
    avatar: {
        width: 150,
        height: 150,
        marginRight: 20
    },
    title: {
        fontWeight: 'bold',
        color: '#3f51b5',
        fontSize: 20
    },
    chip: {
        marginLeft: 10
    }
  }));

const Top10 = ({data, categories}) => {
    const classes = useStyles();

    return <div>
        <h1>Top 10 movies</h1>
        <List className={classes.root}>
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

                return <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt={movie.title} src={`${Config.ApiImages}/${movie.poster_path}`} className={classes.avatar} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={movie.title}
                        className={classes.title}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                    {truncate(movie.overview, 120)}
                                </Typography>
                                <div>
                                    {movieCategories.map(movieCategory => <Chip label={movieCategory} className={classes.chip} />)}
                                </div>
                            </React.Fragment>
                        }
                    />
                </ListItem>;
            }
            )}
        </List>

    </div>;

};

export default Top10;
