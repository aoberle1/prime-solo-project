import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects'

function* submitWine (action) {
    try {
      console.log( 'action.payload for submitWine is:', action.payload);
      yield axios.post('/api/myCellar', action.payload);
      yield put ({type:'FETCH_WINE'});
    } catch (error) {
      console.log('error in POST is:', error);
    };
  };

function* submitChanges (action) {
    try {
        console.log( 'action.payload for submitChanges is:', action.payload);
        yield axios.put(`/api/myCellar/edit/${action.payload.id}`, action.payload);
        yield put ({type:'FETCH_WINE'});
    } catch (error) {
        console.log('error in PUT is:', error)
    }
}

function* submitWineSaga() {
    yield takeLatest('SUBMIT_WINE', submitWine);
    yield takeLatest('SUBMIT_CHANGES', submitChanges);
}

export default submitWineSaga;