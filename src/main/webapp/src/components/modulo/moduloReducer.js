import {search_mode} from '../../main/constants/constants'
const INITIAL_STATE = { entity: {descricao: '', label : ''}, list : [], pageMode: search_mode}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'MODULO_FIND':
            if(action.payload && action.payload.data && action.payload.data.data) {
                return {...state, list: action.payload.data.data}
            }else{
                return {...state, list: []}
            }
        case 'MODULO_ALL':
            return {...state, list: action.payload.data.data}
        case 'MODULO_FORM':
            return {...state, entity: action.payload}
        case 'MODULO_PAGE_MODE_CHANGED':
            return {...state, pageMode: action.payload}
        default:
            return state
    }
}