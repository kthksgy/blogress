/**
 * src/components/pages/LoginPage.jsx
 * @file ログインページ
 */

import React from 'react';
import { axios } from '../../App';

import { useSelector, useDispatch } from 'react-redux';

import { setToken } from '../../modules/UserModule';

import LoginPageTemplate from '../templates/LoginPageTemplate';

const LoginPage = () => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.user.token);

    const login = (email, password) => {
        axios
            .post('/auth/login/', {
                email: email,
                password: password,
            })
            .then(res=>{dispatch(setToken(res.data.token));axios.defaults.headers.common['Authorization'] = 'JWT ' + token;})
            .catch(err=>{console.log(err);});
    }
    return (
        <LoginPageTemplate login={login}/>
    );
}

export default LoginPage;