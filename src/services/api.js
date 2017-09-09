
import axios from 'axios';

const API_ROOT = 'https://w6anb5ao79.execute-api.ap-northeast-1.amazonaws.com/dev'

export const fetchReg =(userid, password) => callApi('/signup', { userid, password })

function callApi(endpoint, params) {
    const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint
    
    console.log('url: ', fullUrl, 'params', JSON.stringify(params));
    return axios.post( fullUrl, params )
        .then(response => ({response}) )
        .catch(response => ({response}),
        error => ({error: error.message || 'Something bad happened'})
    );
}