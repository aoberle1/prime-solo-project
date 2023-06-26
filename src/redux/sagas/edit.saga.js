import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects'

function* editWine(action) {

}

function* editWineSaga() {
    yield takeLatest ('EDIT_DETAILS', editWine)
}

export default editWineSaga;