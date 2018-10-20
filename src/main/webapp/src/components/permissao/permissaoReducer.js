import {search_mode} from '../../main/constants/constants'
const INITIAL_STATE = { entity: {descricao: '', label : ''}, list : [], pageMode: search_mode}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'PERMISSAO_FIND':
            if(action.payload) {
                return {...state, list: action.payload}
            }else{
                return {...state, list: []}
            }
        case 'PERMISSAO_ALL':
            return {...state, list: action.payload}
        case 'PAGE_MODE_CHANGED':
            return {...state, pageMode: action.payload}
        default:
            return state
    }
}