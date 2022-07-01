import { combineReducers } from "@reduxjs/toolkit";
import DrugSlice from './reducers/slice/drugSlice'

const rootReducer = combineReducers({
    drugList: DrugSlice.reducer
});
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>
