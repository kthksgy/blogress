import React from 'react';

import { Grid } from '@material-ui/core'

import PostTile from '../molecules/PostTile';

const PostTileGrid = props => (
    <Grid container spacing={4}>
        {props.posts.map(post => (
            <Grid item xs={4}>
                <PostTile title={post.title} body={post.body} thumbnail={post.thumbnail}/>
            </Grid>
        ))}
    </Grid>
);

export default PostTileGrid;