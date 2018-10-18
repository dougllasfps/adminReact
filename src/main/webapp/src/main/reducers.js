import { combineReducers } from 'redux'

import permissaoReducer from '../components/permissao/permissaoReducer'
import {reducer as formReducer} from 'redux-form'


const rootReducer = combineReducers({
    permissoes : permissaoReducer,
    form: formReducer
})

export default rootReducer;