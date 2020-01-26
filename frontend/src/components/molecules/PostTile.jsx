import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    position: 'relative',
    maxWidth: 345,
  },
  media: {
    height: 345,
  },
  content: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  excerpt: {
      marginRight: 30,
  }
});

const PostTile = props => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={props.thumbnail}
              title={props.title}
            />
            <CardContent className={classes.content}>
              <Typography gutterBottom variant="h5" component="h2">
                {props.title}
              </Typography>
              <Typography variant="body2" component="p" className={classes.excerpt} noWrap>
                {props.body}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      );
}

export default PostTile;