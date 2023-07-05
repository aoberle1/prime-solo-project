import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects'

function* fetchFavorites() {
    try {
        const favorites = yield axios.get('/api/user/favorites');
        console.log('favorites data from axios.get:', favorites.data);
        yield put({ type: 'SET_FAVORITES', payload: favorites.data})
    } catch (error) {
        console.log('error in favorites.saga.js:', error);
    }
}

function* favoritesSaga() {
    yield takeLatest('FETCH_FAV', fetchFavorites)
}

export default favoritesSaga;