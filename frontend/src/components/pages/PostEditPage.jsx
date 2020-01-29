/**
 * src/components/pages/PostEditPage.jsx
 * @file 投稿編集ページ
 */

import React from 'react';
import { axios } from '../../App';

import { useSelector, useDispatch } from 'react-redux';

import { setToken } from '../../modules/UserModule';

import PostEditTemplate from '../templates/PostEditTemplate';

const PostEditPage = () => {
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
        <PostEditTemplate login={login}/>
    );
}

export default PostEditPage;