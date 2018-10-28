import axios from 'axios'
import { find as genericFind, submit as genericSubmit, getList as genericGetList } from '../../api/generic/reduxUtil'

import {GRUPO_FORM,GRUPO_ALL,GRUPO_FIND,GRUPO_PAGE_MODE_CHANGED,BASE_URL,NEW_ENTITY} from './GrupoService'
import { showSuccessMessage, showErrorMessage } from '../../../components/messages/messages'
import ComponentUtils from '../../../components/util/ComponentUtils'

export function find( grupo ){
    let query = `descricao=${grupo.descricao}&label=${grupo.label}`;
    return genericFind( BASE_URL, query, GRUPO_FIND)
}

export function submit(grupo){
    return genericSubmit(BASE_URL, grupo, pageMode(ComponentUtils.SEARCH_STATUS) )
}

export function getList(){
    return genericGetList(BASE_URL, GRUPO_ALL)
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

export function prepareEditar( entity ){
    return dispatch => {
        axios
            .get(`${BASE_URL}/${entity.id}`)
            .then( resp => {
                dispatch( prepareFormToUpdate(resp.data.data) )
            }).catch(e => {
                e.response.data.errors.forEach(error => {
                    showErrorMessage(error)
                })
            });    
    }

}

function prepareFormToUpdate( entity ){
    return [
        toForm(entity),
        pageMode(ComponentUtils.UPDATE_STATUS)
    ]
}

function toForm(entity){
    return {
        type: GRUPO_FORM,
        payload: entity
    }
}

export function pageMode(mode){
    return {
        type: GRUPO_PAGE_MODE_CHANGED,
        payload: mode
    }
}

export function cancel(){
    return pageMode(ComponentUtils.SEARCH_STATUS)
}

export function setModulo(modulo){
    return {
        type: 'GRUPO_MODULO_CHANGED',
        payload: modulo
    }
}

export function setPermissoes(permissoes){
    return {
        type: 'GRUPO_PERMISSAO_CHANGED',
        payload: permissoes
    }
}
