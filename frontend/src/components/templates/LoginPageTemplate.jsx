/**
 * src/components/templates/LoginPageTemplate.jsx
 * @file ログインページのテンプレートコンポーネント
 */
import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Footer from '../organisms/Footer';
import LoginForm from '../organisms/LoginForm';

const useStyles = makeStyles(theme => ({
    content: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing(4),
    }
}));

const LoginPageTemplate = props => {
    const classes = useStyles();
    return (
        <Fragment>
            <div className={classes.content}>
                <LoginForm login={props.login}/>
            </div>
            <Footer />
        </Fragment>
    );
}

export default LoginPageTemplate;