/**
 * src/components/templates/PostEditTemplate.jsx
 * @file 投稿編集ページのテンプレート
 */
import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Footer from '../organisms/Footer';
import PostEditor from '../organisms/PostEditor';

const useStyles = makeStyles(theme => ({
    content: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing(4),
    }
}));

const PostEditTemplate = props => {
    const classes = useStyles();
    return (
        <Fragment>
            <div className={classes.content}>
                <PostEditor/>
            </div>
            <Footer />
        </Fragment>
    );
}

export default PostEditTemplate;