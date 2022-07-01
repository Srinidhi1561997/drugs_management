import { createSlice } from "@reduxjs/toolkit";
import { drugInitialState } from "../../types";

const initialState: drugInitialState = {
    isLoading: false,
    drugList: [],
    err: {}
}

const DrugSlice = createSlice({
    name: 'DrugSlice',
    initialState,
    reducers: {
        fetchDrugInitialState: (state) => {
            state.isLoading = true
            state.drugList = []
        },
        fetchDrugSuccess: (state, action) => {
            state.isLoading = false
            state.drugList = action.payload
        },
        fetchDrugFailure: (state, action) => {
            state.isLoading = false
            state.err = action.payload
        }
    }
});

export const DrugSliceActions = DrugSlice.actions
export default DrugSlice;