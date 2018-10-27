import { combineReducers } from 'redux'

import permissaoReducer from './components/permissao/permissaoReducer'
import moduloReducer from './components/modulo/moduloReducer'
import grupoReducer from './components/grupo/grupoReducer'
import {reducer as formReducer} from 'redux-form'


const rootReducer = combineReducers({
    permissoes : permissaoReducer,
    modulos: moduloReducer,
    grupos: grupoReducer,
    form: formReducer
})

export default rootReducer;