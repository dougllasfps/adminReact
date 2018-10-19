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

const BASE_URL = `${process.env.REACT_APP_BASE_SERVICE_URL}/api/modulos`

export const NEW_ENTITY = {descricao:'', label: ''}

export function find( MODULO ){
    let query = `descricao=${MODULO.descricao}&label=${MODULO.label}`;
    return genericFind( BASE_URL, query, 'MODULO_FIND')
}

export function submit(MODULO){
    return genericSubmit(BASE_URL,MODULO, pageMode(search_mode) )
}

export function getList(){
    return genericGetList(BASE_URL, 'MODULO_ALL')
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

export function prepareEditar(MODULO){
    return [
        toForm(MODULO),
        pageMode(update_mode)
    ]
}

function pageMode(mode){
    return {
        type: 'MODULO_PAGE_MODE_CHANGED',
        payload: mode
    }
}

function toForm(MODULO){
    return [initialize('modulosForm', MODULO),{
        type: 'MODULO_FORM',
        payload: MODULO
    }]
}

export function cancel(){
    return pageMode(search_mode)
}

