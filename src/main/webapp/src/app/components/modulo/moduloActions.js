import { find as genericFind, submit as genericSubmit,  getList as genericGetList} from '../../api/generic/reduxUtil'

import {MODULO_FORM, MODULO_ALL,MODULO_FIND,MODULO_PAGE_MODE_CHANGED,BASE_URL,NEW_ENTITY} from './ModuloService'
import axios from 'axios'
import { showSuccessMessage, showErrorMessage } from '../../../components/messages/messages'
import ComponentUtils from '../../../components/util/ComponentUtils'

export function find( MODULO ){
    let query = `descricao=${MODULO.descricao}&label=${MODULO.label}`;
    return genericFind( BASE_URL, query, MODULO_FIND)
}

export function submit(MODULO){
    return genericSubmit(BASE_URL,MODULO, pageMode(ComponentUtils.SEARCH_STATUS) )
}
    
export function getList(){
    return genericGetList(BASE_URL, MODULO_ALL)
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
        pageMode(ComponentUtils.INSERT_STATUS)
    ]
}

export function prepareEditar(entity){
    return [
        toForm(entity),
        pageMode(ComponentUtils.UPDATE_STATUS)
    ]
}

function pageMode(mode){
    return {
        type: MODULO_PAGE_MODE_CHANGED,
        payload: mode
    }
}

function toForm(entity){
    return {
        type: MODULO_FORM,
        payload: entity
    }
}

export function cancel(){
    return pageMode(ComponentUtils.SEARCH_STATUS)
}

