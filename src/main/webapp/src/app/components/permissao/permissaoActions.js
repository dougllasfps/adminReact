import axios from 'axios'
import { find as genericFind, submit as genericSubmit, getList as genericGetList } from '../../api/generic/reduxUtil'

import {PERMISSAO_FORM,PERMISSAO_ALL,PERMISSAO_FIND,PERMISSAO_PAGE_MODE_CHANGED,BASE_URL,NEW_ENTITY} from './PermissaoService'
import { showSuccessMessage, showErrorMessage } from '../../../components/messages/messages'
import ComponentUtils from '../../../components/util/ComponentUtils'

export function find( permissao ){
    let query = `descricao=${permissao.descricao}&label=${permissao.label}`;
    return genericFind( BASE_URL, query, PERMISSAO_FIND)
}

export function submit(permissao){
    return genericSubmit(BASE_URL, permissao, pageMode(ComponentUtils.SEARCH_STATUS) )
}

export function getList(){
    return genericGetList(BASE_URL, PERMISSAO_ALL)
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
    console.log(entity)
    return [
        toForm(entity),
        pageMode(ComponentUtils.UPDATE_STATUS)
    ]
}

function toForm(entity){
    return {
        type: PERMISSAO_FORM,
        payload: entity
    }
}

function pageMode(mode){
    return {
        type: PERMISSAO_PAGE_MODE_CHANGED,
        payload: mode
    }
}

export function cancel(){
    return pageMode(ComponentUtils.SEARCH_STATUS)
}