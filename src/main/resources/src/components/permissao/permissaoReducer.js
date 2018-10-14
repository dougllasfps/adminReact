const INITIAL_STATE = {descricao: '', label : ''}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'PERMISSAO_ALL':
            return {...state, list: action.payload.data.data}
        default:
            return state
    }
}