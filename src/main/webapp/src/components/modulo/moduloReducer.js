import {search_mode} from '../../main/constants/constants'
const INITIAL_STATE = { entity: {descricao: '', label : ''}, list : [], pageMode: search_mode}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'MODULO_FIND':
            return {...state, list: action.payload}
        case 'MODULO_ALL':
            return {...state, list: action.payload}
        case 'MODULO_FORM':
            return {...state, entity: action.payload}
        case 'MODULO_PAGE_MODE_CHANGED':
            return {...state, pageMode: action.payload}
        default:
            return state
    }
}