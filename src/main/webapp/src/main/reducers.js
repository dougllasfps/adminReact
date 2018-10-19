import { combineReducers } from 'redux'

import permissaoReducer from '../components/permissao/permissaoReducer'
import moduloReducer from '../components/modulo/moduloReducer'
import {reducer as formReducer} from 'redux-form'


const rootReducer = combineReducers({
    permissoes : permissaoReducer,
    modulos: moduloReducer,
    form: formReducer
})

export default rootReducer;