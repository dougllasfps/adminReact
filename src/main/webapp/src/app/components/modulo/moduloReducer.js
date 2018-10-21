import {MODULO_FIND,MODULO_ALL,MODULO_FORM,MODULO_PAGE_MODE_CHANGED} from './ModuloService'
import ComponentUtils from '../../../components/util/ComponentUtils'

const INITIAL_STATE = { 
    entity: {descricao: '', label : ''}, 
    list : [], 
    pageStatus: ComponentUtils.SEARCH_STATUS 
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case MODULO_FIND:
            return {...state, list: action.payload}
        case MODULO_ALL:
            return {...state, list: action.payload}
        case MODULO_FORM:
            return {...state, entity: action.payload}
        case MODULO_PAGE_MODE_CHANGED:
            return {...state, pageStatus: action.payload}
        default:
            return state
    }
}