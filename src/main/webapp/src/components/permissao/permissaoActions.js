import
{
    find as genericFind,
    submit as genericSubmit,
    getList as genericGetList

} from '../../api/generic/genericActionCreator'

import axios from 'axios'

import { showSuccessMessage, showErrorMessage } from '../messages/messages'

import {update_mode, insert_mode, search_mode} from '../../main/constants/constants'
import {initialize} from 'redux-form'

const BASE_URL = `${process.env.REACT_APP_BASE_SERVICE_URL}/api/permissoes`

export const NEW_ENTITY = {descricao:'', label: ''}

export function find( permissao ){
    let query = `descricao=${permissao.descricao}&label=${permissao.label}`;
    return genericFind( BASE_URL, query, 'PERMISSAO_FIND')
}

export function submit(permissao){
    return genericSubmit(BASE_URL,permissao, pageMode(search_mode) )
}

export function getList(){
    return genericGetList(BASE_URL, 'PERMISSAO_ALL')
}

export function remove(id){
    return dispatch => {
        axios
            .delete(`${BASE_URL}/${id}`)
            .then( resp => {
                showSuccessMessage('Registro removido com sucesso.')
                dispatch(getList())
            }).catch(e => {
            e.response.data.errors.forEach(error => {
                    showErrorMessage(error)
                }
            );
        })
    }
}

export function prepareInsert(){
    return [
        toForm(NEW_ENTITY),
        pageMode(insert_mode)
    ]
}

export function prepareEditar(permissao){
    // let id = permissao.id;
    // let modulos = axios.get(`${BASE_URL}/${id}/modulos`);
    //
    // console.log(modulos)
    //
    // permissao = {...permissao, modulos: modulos}
    //
    // console.log(permissao)


    return dispatch => {
        axios.get(`${BASE_URL}/${permissao.id}/alldata`)
            .then( resp => {
                let entity = resp.data.data
                dispatch( [
                    toForm(entity),
                    pageMode(update_mode)
                ])
            }).catch( e => {
                e.response.data.errors.forEach(error => {
                        showErrorMessage(error)
                    }
                );
            })
    }
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

