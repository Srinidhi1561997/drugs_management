import { GetRequest, PutRequest, PostRequest, DeleteRequest } from ".";
import { apiEndPoint } from "./endPoint";

export const fetchDrugsList = async () => {
    const response = await GetRequest(apiEndPoint)
    console.log('response in calling api is', response)
    if (response?.statusText) {
        return response.data
    }
    return null
}