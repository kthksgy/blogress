/* Action: アプリからstoreにデータを送信する情報のオブジェクト */
// Actionの名前
const SET_USERNAME = 'SET_USERNAME';
// Actionの定義
export const setUsername = username => ({
    type: SET_USERNAME,
    username: username,
})

const SET_TOKEN = 'SET_TOKEN';
export const setToken = token => ({
    type: SET_TOKEN,
    token: token,
})

/* Reducer: storeに送信されたActionに応じてアプリの状態がどう変化するかを指定する関数 */
// Reducerの初期状態
const initialState = {
    username: '',
    token: '',
}

// ReducerのActionのタイプに応じた処理
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USERNAME:
            return {
                ...state,
                username: action.username
            };
        case SET_TOKEN:
            return {
                ...state,
                token: action.token
            };
        default:
            return state;
    }
}

export default reducer;