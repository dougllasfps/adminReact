import ComponentUtils from '../../../components/util/ComponentUtils'
import {createReducer} from '../../api/generic/reduxUtil'

const INITIAL_STATE = { 
    entity: {descricao: '', label : ''}, 
    list : [], 
    pageStatus: ComponentUtils.SEARCH_STATUS 
}

export default function(state = INITIAL_STATE, action) {
    return createReducer('MODULO', state, action)
}