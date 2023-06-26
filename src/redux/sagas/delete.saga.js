import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects'


function* deleteWine(action) {
    console.log('action.payload for deleteWine:', action.payload);
    try{
        yield axios.delete(`/api/myCellar/${action.payload}`)
        yield put({ type: 'FETCH_WINE'})
    } catch (error) {
        console.log('action.payload for deleteWine is:', action.payload);
        console.log('error in deleteWine:', error);
    }
}

function* deleteWineSaga() {
    yield takeLatest('DELETE_WINE', deleteWine)
}

export default deleteWineSaga;