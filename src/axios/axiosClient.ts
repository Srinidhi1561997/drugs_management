import axios from "axios";

const drugApi = axios.create({
    baseURL: "https://62bbeab6eff39ad5ee178d53.mockapi.io/drug_list/",
});

var c = console.log.bind(document);

// Interceptors
drugApi.interceptors.request.use(function (config) {
    // Do something before request is sent
    c('print the axios config', config);
    return config;
}, function (error) {
    // Do something with request error
    const status = error?.response?.status
    switch (status) {
        case 403:

            break;

        default:
            break;
    }
    c('print the axios error', error);
    return Promise.reject(error);
});

// Add a response interceptor
drugApi.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    c('print the axios response', response);
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    c('print the axios error', error);
    return Promise.reject(error);
});

export default drugApi;