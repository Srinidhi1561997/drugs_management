import { actionIds } from "../../types"
import { getDrugsActionCreator } from "../actionCreators"

export const fetchDrugList:getDrugsActionCreator=()=>{
    return {
        type: actionIds.GET_DRUGS
    }
}