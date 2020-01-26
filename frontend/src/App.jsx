/**
 * src/App.jsx
 * @file ルーティングやシングルトン定義をする最上位コンポーネント
 */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Axios from 'axios';

/* Redux関連 */
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './modules';

/* ページコンポーネント */
import TopPage from './components/pages/TopPage';
import LoginPage from './components/pages/LoginPage';

/**
 * ブログタイトル
 * @type {string}
 */
export const title = 'My Blogress Life';
/**
 * ブログの説明
 * @type {string}
 */
export const description = 'This is my blog made in simple blog system named Blogress.';
/**
 * コピーライト表示
 * @type {string}
 */
export const copyright = 'Copyright © ' + title + ' ' + new Date().getFullYear() + '.';

/**
 * APIエンドポイント
 * @type {string}
 */
export const endpoint = 'http://localhost:8000/api';

/** Redux用のストア */
export const store = createStore(reducer);

/** ベースのURLが定義されたAxiosインスタンスを作成して使い回す */
export const axios = Axios.create({
  baseURL: endpoint,
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
  data: {},
  responseType: 'json',
});

/* 各ページのルーティング */
const App = () => {
  return(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/login' component={LoginPage}/>
          <Route exact path='/' component={TopPage}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;