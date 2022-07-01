import drugApi from "./axiosClient";

const GetRequest = async (endPoint: string, payload?: object) => {
    const response = await drugApi.get(endPoint, payload)
    console.log('response is general retRequest', response)
    if (response?.statusText) {
        return response;
    }
    return null
}

const PostRequest = async (endPoint: string, payload?: object) => {
    const response = await drugApi.post(endPoint, payload)
    if (response?.status) {
        return response
    }
    return response
}

const PutRequest = async (endPoint: string, payload?: object) => {
    const response = await drugApi.put(endPoint, payload)
    if (response?.status) {
        return response
    }
    return response
}

const DeleteRequest = async (endPoint: string, payload?: object) => {
    const response = await drugApi.delete(endPoint, payload)
    if (response?.status) {
        return response
    }
    return response
}

export { GetRequest, PostRequest, PutRequest, DeleteRequest }
