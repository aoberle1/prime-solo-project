import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects'

function* fetchCount() {
    try {
        const wineCount = yield axios.get('/api/user/count');
        console.log('wine count data from axios.get:', wineCount.data);
        yield put({ type: 'SET_CELLAR_COUNT', payload: wineCount.data})
    } catch (error) {
        console.log('error in wineCount.saga.js:', error);
    }
}

function* wineCountSaga() {
    yield takeLatest('FETCH_CELLAR_COUNT', fetchCount)
}

export default wineCountSaga;