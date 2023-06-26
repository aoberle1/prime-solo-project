import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects'

function* editWine(action) {
    console.log('action.payload for editWine saga is:', action.payload);
    try {
        const wineDetails = yield axios.get(`/api/myCellar/details/${action.payload}`, action.payload);
        yield put({ type: 'SET_DETAILS', payload: wineDetails});
    } catch (error) {
        console.log('error in editWine saga:', error)
    }
}

function* editWineSaga() {
    yield takeLatest ('EDIT_DETAILS', editWine)
}

export default editWineSaga;