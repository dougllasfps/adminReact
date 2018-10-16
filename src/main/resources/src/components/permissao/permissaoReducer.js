import {search_mode} from '../../main/constants/constants'
const INITIAL_STATE = { entity: {descricao: '', label : ''}, list : [], pageMode: search_mode}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'PERMISSAO_FIND':
            if(action.payload && action.payload.data && action.payload.data.data) {
                return {...state, permissoesList: action.payload.data.data}
            }else{
                return {...state, permissoesList: []}
            }
        case 'PERMISSAO_ALL':
            return {...state, permissoesList: action.payload.data.data}
        case 'PERMISSAO_FORM':
            return {...state, permissaoEntity: action.payload}
        case 'PAGE_MODE_CHANGED':
            return {...state, pageMode: action.payload}
        default:
            return state
    }
}