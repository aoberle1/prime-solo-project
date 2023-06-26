import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects'

function* fetchWine() {
    try {
        const myWine = yield axios.get('/api/myCellar');
        console.log('wine data from axios.get:', myWine.data);
        yield put({ type: 'SET_WINE', payload: myWine.data})
    } catch (error) {
        console.log('error in myCellar.saga.js:', error)
    }
}

function* myCellarSaga() {
    yield takeLatest('FETCH_WINE', fetchWine)
}

export default myCellarSaga;