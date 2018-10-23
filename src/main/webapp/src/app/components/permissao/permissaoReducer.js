import ComponentUtils from '../../../components/util/ComponentUtils'

const INITIAL_STATE = { 
    entity: {descricao: '', label : ''}, 
    list : [], 
    pageStatus: ComponentUtils.pageMode
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'PERMISSAO_FIND':
        return {...state, list: action.payload}
        case 'PERMISSAO_ALL':
            console.log('permissao_all ', action.payload)
            return {...state, list: action.payload}
        case 'PERMISSAO_FORM':
            return {...state, entity: action.payload}
        case 'PERMISSAO_PAGE_STATUS':
            return {...state, pageStatus: action.payload}
        default:
            return state
    }
}