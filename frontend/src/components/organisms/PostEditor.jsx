/**
 * src/components/organisms/PostEditor.jsx
 * @file 投稿の編集を行うフォームのコンポーネント
 */

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Box, TextField, Button, Grid, FormControlLabel, Typography } from '@material-ui/core'
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import ReactMarkdown from 'react-markdown';

const useStyles = makeStyles(theme => ({
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    button: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    checkbox: {
        float: 'right',
    }
}));

const PostEditor = props => {
    const classes = useStyles();
    const [postTitle, setPostTitle] = useState('');
    const [markdown, setMarkdown] = useState('');
    return (
        <Box width={'100%'} p={6} border={1}>
            <Typography component="h1" variant="h5">記事を投稿</Typography>
            <form noValidate>
                <TextField id='postTitleField'
                    value={postTitle} onChange={e => setPostTitle(e.target.value)}
                    label='タイトル' variant='outlined'/>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <TextField className={classes.form} id="markdownField"
                            value={markdown} onChange={e => setMarkdown(e.target.value)}
                            label="Markdown"
                            multiline
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <ReactMarkdown source={markdown}/>
                    </Grid>
                </Grid>
                <Button className={classes.button}
                    variant='contained' color='primary' startIcon={<CheckBoxIcon />}>投稿</Button>
            </form>
        </Box>
    );
}

export default PostEditor;