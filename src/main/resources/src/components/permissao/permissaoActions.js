import axios from 'axios'

const BASE_URL = 'http://localhost:8080/api/permissoes'

export function getList(){
    let request = axios.get(`${BASE_URL}`)
    return {
        type: 'PERMISSAO_ALL',
        payload: request
    }
}