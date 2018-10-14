import { combineReducers } from 'redux'

import permissaoReducer from '../components/permissao/permissaoReducer'

const rootReducer = combineReducers({
    permissoes : permissaoReducer
})

export default rootReducer;