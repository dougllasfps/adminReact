import axios from 'axios'
import {showSuccessMessage, showErrorMessage, showWarnMessage} from '../messages/messages'

import {update_mode, insert_mode, search_mode} from '../../main/constants/constants'
import {initialize} from 'redux-form'

const BASE_URL = 'http://localhost:8080/api/permissoes'

export const NEW_ENTITY = {descricao:'', label: ''}

export function find(permissao){
    let url = `${BASE_URL}/find?descricao=${permissao.descricao}&label=${permissao.label}`;
    let request = axios.get(url)
                .catch(error => {
                    error.response.data.warnings.forEach( w =>{
                        showWarnMessage(w)
                    })
                })
    return {
        type: 'PERMISSAO_FIND',
        payload: request
    }

}

export function submit(permissao){
    let id = permissao.id ? permissao.id : '';
    let method = id ? 'put' : 'post'
    return dispatch => {
        axios[method](`${BASE_URL}/${id}`,permissao )
            .then( resp =>{
                showSuccessMessage('Registro salvo com sucesso.')
                dispatch( pageMode(search_mode) )
            }).catch( e => {
                e.response.data.errors.forEach(error => {
                    showErrorMessage(error)
                });
            })
    }
}

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
    return [initialize('permissoesForm', permissao),{
        type: 'PERMISSAO_FORM',
        payload: permissao
    }]
}

export function cancel(){
    return pageMode(search_mode)
}

export function remove(id){
    return dispatch => {
        axios
            .delete(`${BASE_URL}/${id}`)
            .then( resp => {
                showSuccessMessage('Registro removido com sucesso.')
                dispatch(getList());
            }).catch(e => {
            e.response.data.errors.forEach(error => {
                showErrorMessage(error)
            });
        })
    }

}