/**
 * src/components/pages/TopPage.jsx
 * @file トップページを表示するコンポーネント
 */
import React, { useState, useEffect } from 'react';
import { axios } from '../../App';
import { makeStyles } from '@material-ui/core/styles';

import TopPageTemplate from '../templates/TopPageTemplate';

const useStyles = makeStyles(theme => ({
    page: {
        margin : 60,
    }
}));

const TopPage = () => {
    const classes = useStyles();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get('/posts/', )
            .then(res=>{setPosts(res.data);})
            .catch(err=>{console.log(err);});
    }, []);

    return(
        <TopPageTemplate className={classes.page} posts={posts} />
    );
}

export default TopPage;