export type drugData = {
    drug_id: string
    email: string
    drug_company: string
    first_name: string
    gender: string
    last_name: string
    drug_brand_name: string
    drug_generic_name: string
    id: number
}

export type drugInitialState = {
    isLoading: boolean,
    drugList: drugData[],
    err: object
}

export enum actionIds {
    DELETE_DRUG = "DELETE_DRUG",
    CREATE_DRUG = "CREATE_DRUG",
    GET_DRUGS = "GET_DRUGS",
    EDIT_SPECIFIC_DRUG = "EDIT_SPECIFIC_DRUG",
    SEARCH_DRUGS = "SEARCH_DRUGS"
}

export interface getDrugs {
    type: 'GET_DRUGS'
}