import { put, call, takeEvery, select } from "redux-saga/effects";
import history from "../../../history";
import {getBeers, postBeer, postBeerRate} from "./beers.api";
import {
  fetchBeers,
  fetchBeersFailure,
  fetchBeersSuccess,
  setBeers,
  setNewlyCreatedBeer, updateBeerRate, updateRateFailure
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

function* setBeerRateWorker({uuid, rate}) {
  try {
    const { data } = yield call(postBeerRate, uuid, rate);
    yield put(updateBeerRate(data));
  } catch (e) {
    yield put(updateRateFailure());
    console.error(e);
  }
}

export function* setBeerRateWatcher() {
  yield takeEvery(BeerActionTypes.BEERS_SET_RATE, setBeerRateWorker);
}
