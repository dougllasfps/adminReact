import ComponentUtils from '../../../components/util/ComponentUtils'
import {createReducer} from '../../api/generic/reduxUtil'


const INITIAL_STATE = { 
    entity: {descricao: '', label : ''}, 
    list : [], 
    pageStatus: ComponentUtils.SEARCH_STATUS
}

export default function(state = INITIAL_STATE, action) {
    state = createReducer('GRUPO', state, action)

    switch(action.type){
        case 'GRUPO_MODULO_CHANGED':
            return {...state, moduloSelecionado: action.payload}
        case 'GRUPO_PERMISSAO_CHANGED':
            return {...state, permissoesSelecionadas: action.payload}
        default:
            return state;
    }
}