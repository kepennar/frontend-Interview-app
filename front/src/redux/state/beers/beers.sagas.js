import { put, call, takeEvery, select } from "redux-saga/effects";
import history from "../../../history";
import { getBeers, postBeer, rateBeer } from "./beers.api";
import { toastr } from "react-redux-toastr";

import {
  fetchBeers,
  fetchBeersFailure,
  fetchBeersSuccess,
  setBeers,
  setNewlyCreatedBeer
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

export function* rateBeerWatcher() {
  yield takeEvery(BeerActionTypes.RATE_BEER, rateBeerWorker);
}

function* rateBeerWorker({ beerId, score }) {
  try {
    yield put({ type: BeerActionTypes.LOADING });
    const { data } = yield call(rateBeer, beerId, score);
    yield put({ type: BeerActionTypes.BEER_UPDATE_RATE, beerId, score: data.score });
    yield put({ type: BeerActionTypes.LOADING });
    yield toastr.success("Beer rated");
  } catch (e) {
    yield put({ type: BeerActionTypes.LOADING });
    yield toastr.error("Error beer not rated");
  }
}
