/**
 * src/components/organisms/LoginForm.jsx
 * @file ログイン時の入力パネルを表示するコンポーネント
 */

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Box, TextField, Button, Checkbox, FormControlLabel, Typography } from '@material-ui/core'
import InputIcon from '@material-ui/icons/Input';

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

const LoginForm = props => {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    return (
        <Box width={256} p={6} border={1}>
            <Typography component="h1" variant="h5">ログイン</Typography>
            <form noValidate>
                <TextField className={classes.form} id="emailForm"
                    value={email} onChange={e => setEmail(e.target.value)}
                    label="メールアドレス"/>
                <TextField className={classes.form} id='passwordForm'
                    value={password} onChange={e => setPassword(e.target.value)}
                    label="パスワード"
                    type={showPassword ? '' : 'password'}
                    autoComplete='current-password'/>
                <FormControlLabel className={classes.checkbox} label="パスワードを表示" control={
                    <Checkbox
                        checked={showPassword}
                        onChange={e => setShowPassword(e.target.checked)}
                        value="primary"
                        inputProps={{ 'aria-label': 'primary checkbox' }}/>
                }/>
                <Button className={classes.button}
                    variant='contained' color='primary' startIcon={<InputIcon />} onClick={e=>props.login(email, password)}>ログイン</Button>
            </form>
        </Box>
    );
}

export default LoginForm;