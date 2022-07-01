import { put, call } from "redux-saga/effects";
import { fetchDrugsList } from "../axios/apiHandle";
import { DrugSliceActions } from "../reducers/slice/drugSlice";
import { drugData } from "../types";

console.log('worker function called')
// worker functions
export function* getDrugsListWorker() {
    yield put(DrugSliceActions.fetchDrugInitialState())
    try {
        const response: drugData[] = yield fetchDrugsList()
        console.log('printy the response', response)
        yield put(DrugSliceActions.fetchDrugSuccess(response))
    } catch (error) {
        // yield put(DrugSliceActions.fetchDrugFailure(error))
    }
}