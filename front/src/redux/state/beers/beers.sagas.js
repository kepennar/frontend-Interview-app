import { put, call, takeEvery, select } from "redux-saga/effects";
import history from "../../../history";
import { getBeers, postBeer, postBeerRate, putBeer, deleteBeer} from "./beers.api";
import {
  fetchBeers,
  fetchBeersFailure,
  fetchBeersSuccess,
  setBeers,
  setNewlyCreatedBeer,
  rateBeerSuccess,
  rateBeerFailure,
  setNewlyRatedBeer,
  updateBeerSuccess,
  updateBeerFailure,
  deleteBeerSuccess,
  deleteBeerFailure,
} from "./beers.actions";
import { BeerActionTypes } from "./beers.model";
import { beerItemsSelector } from "./beers.selectors";

function* fetchBeersIfNotWorker() {
  const items = yield select(beerItemsSelector);
  if (items.length === 0) {
    yield put(fetchBeers());
  }
}

export function* fetchBeersIfNotWatcher() {
  yield takeEvery(BeerActionTypes.BEERS_FETCH_IF_NOT, fetchBeersIfNotWorker);
}

function* fetchBeersWorker() {
  try {
    const { data } = yield call(getBeers);
    yield put(setBeers(data));
    yield put(fetchBeersSuccess());
  } catch (e) {
    yield put(setBeers([]));
    yield put(fetchBeersFailure());
  }
}

export function* fetchBeersWatcher() {
  yield takeEvery(BeerActionTypes.BEERS_FETCH, fetchBeersWorker);
}

function* createBeersWorker({ beer }) {
  try {
    const { data } = yield call(postBeer, beer);
    history.push("/");
    yield put(setNewlyCreatedBeer(data));
    yield put(fetchBeersSuccess());
  } catch (e) {
    yield put(fetchBeersFailure());
  }
}

export function* createBeersWatcher() {
  yield takeEvery(BeerActionTypes.BEERS_CREATE, createBeersWorker);
}

/**
 *
 * @param {beerId, score} beer's uuid and score
 */
function* rateBeersWorker({ beerID, score }) {
  try {
    const { data } = yield call(postBeerRate, beerID, score);
    history.push("/");
    yield put(setNewlyRatedBeer(data));
    yield put(rateBeerSuccess(beerID));
  } catch (e) {
    yield put(rateBeerFailure(beerID));
  }
}

export function* rateBeersWatcher() {
  yield takeEvery(BeerActionTypes.BEERS_RATE, rateBeersWorker);
}

function* updateBeerWorker({ beer }) {
  try {
    const { data } = yield call(putBeer, beer);
    history.push("/");
    yield put(updateBeerSuccess(data.uuid));
  } catch (e) {
    yield put(updateBeerFailure());
  }
}

export function* updateBeerWatcher() {
  yield takeEvery(BeerActionTypes.BEERS_UPDATE, updateBeerWorker);
}

function* deleteBeerWorker({ beer }) {
  try {
    yield call(deleteBeer, beer.uuid);
    history.push("/");
    yield put(deleteBeerSuccess());
  } catch (e) {
    yield put(deleteBeerFailure(beer));
  }
}

export function* deleteBeerWatcher() {
  yield takeEvery(BeerActionTypes.BEERS_DELETE, deleteBeerWorker);
}