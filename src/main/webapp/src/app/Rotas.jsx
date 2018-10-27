import React from 'react'
import {Route} from 'react-router-dom';

import Permissao from './components/permissao/Permissao'
import Modulo from './components/modulo/Modulo'
import Grupo from './components/grupo/Grupo'


export default props => (
    <div className="layout-main">
        <Route path="/permissoes" exact component={Permissao} />
        <Route path="/modulos" exact component={Modulo} />
        <Route path="/grupos" exact component={Grupo} />
    </div>
)