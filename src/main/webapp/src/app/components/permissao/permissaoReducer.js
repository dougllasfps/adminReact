import ComponentUtils from '../../../components/util/ComponentUtils'
import {createReducer} from '../../api/generic/reduxUtil'


const INITIAL_STATE = { 
    entity: {descricao: '', label : ''}, 
    list : [], 
    pageStatus: ComponentUtils.SEARCH_STATUS
}

export default function(state = INITIAL_STATE, action) {
    state = createReducer('PERMISSAO', state, action)

    switch(action.type){
        case 'PERMISSAO_MODULOS_ADD_REMOVE':
            return {...state, modulosAdicionados: action.modulos.adicionados, modulosDisponiveis: action.modulos.disponiveis}
        default:
            return state;
    }
}