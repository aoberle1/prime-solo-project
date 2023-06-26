import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects'

function* submitWine (action) {
    try {
      console.log( 'action.payload is:', action.payload);
      yield axios.post('/api/myCellar', action.payload);
    //   yield put ({type:'FETCH_WINE'});
    } catch (error) {
      console.log('error in POST is:', error);
    };
  };

function* submitWineSaga() {
    yield takeLatest('SUBMIT_WINE', submitWine)
}

export default submitWineSaga;