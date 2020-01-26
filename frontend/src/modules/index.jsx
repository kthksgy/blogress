import { combineReducers } from 'redux';

/* モジュール(Actions + Reducers)の読み込み */
import userReducer from './UserModule';

/* 複数のReducerを1つのReducerに統合 */
export default combineReducers({
    user: userReducer,
});