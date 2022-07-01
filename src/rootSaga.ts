import { takeEvery, StrictEffect, takeLatest } from "redux-saga/effects";
import { getDrugsListWorker } from "./sagas";

// watcher
function* rootSaga(): Generator<StrictEffect> {
    yield takeEvery('GET_DRUGS', getDrugsListWorker)
}

export default rootSaga;