import axios from 'axios'
import {update_mode, insert_mode, search_mode} from '../../main/constants/constants'

const BASE_URL = 'http://localhost:8080/api/permissoes'

const NEW_ENTITY = {descricao:'', label: ''}

export function getList(){
    let request = axios.get(`${BASE_URL}`)
    return {
        type: 'PERMISSAO_ALL',
        payload: request
    }
}

export function prepareInsert(){
    return [
        toForm(NEW_ENTITY),
        pageMode(insert_mode)
    ]
}

export function prepareEditar(permissao){
    return [
        toForm(permissao),
        pageMode(update_mode)
    ]
}

function pageMode(mode){
    return {
        type: 'PAGE_MODE_CHANGED',
        payload: mode
    }
}

function toForm(permissao){
    return {
        type: 'PERMISSAO_FORM',
        payload: permissao
    }
}

export function cancel(){
    return pageMode(search_mode)
}