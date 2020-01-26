import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import PostTileGrid from '../organisms/PostTileGrid';

const useStyles = makeStyles(theme => ({
    postTileGrid: {
        margin: theme.spacing(4),
    }
}));

const TopPageTemplate = props => {
    const classes = useStyles();
    return (
        <Fragment>
            <Header />
            <div className={classes.postTileGrid}>
                <PostTileGrid posts={props.posts}/>
            </div>
            <Footer />
        </Fragment>
    );
}

export default TopPageTemplate;