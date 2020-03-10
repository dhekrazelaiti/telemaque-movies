import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";

import Config from "../../Config/Config";
import { truncate } from "../../helpers/Utils";

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
          marginRight: 20,
        
      },
      media: {
          height: 0,
          paddingTop: '100%',
          display: 'block',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        },
      title: {
          fontWeight: 'bold',
          color: '#3f51b5',
          fontSize: 20, 
      },
      chip: {
          marginLeft: 10,
        
      },
      gridContainer: {
          flexGrow: 1,
      },
      card: {
        minHeight: 580,
        textAlign: 'center',
        
      },
}));

const Top10 = ({ data, categories }) => {
  const classes = useStyles();
  const [spacing, setSpacing] = useState(2);

  return (
    <div className={classes.root}>
      <h1>Top 10 movies</h1>
      <Grid container className={classes.gridContainer} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            {data.map(movie => {
              let movieCategories = [];
              movie.genre_ids.map(genre => {
                const foundCategory = categories.find(x => x.id === genre);
                if (foundCategory) {
                  movieCategories.push(foundCategory.name);
                }
                return genre;
              });

              return (
                <Grid item xs={6}>
                  <Card className={classes.card}>
                    <CardHeader title={movie.title} />
                    <CardMedia
                      className={classes.media}
                      image={`${Config.ApiImages}/${movie.poster_path}`}
                      title={movie.title}
                    />
                    <CardContent>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {truncate(movie.overview, 120)}
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                      <div>
                        {movieCategories.map(movieCategory => (
                          <Chip
                            label={movieCategory}
                            className={classes.chip}
                          />
                        ))}
                      </div>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Top10;
