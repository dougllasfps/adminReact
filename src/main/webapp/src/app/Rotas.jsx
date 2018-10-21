import React from 'react'
import {Route} from 'react-router-dom';

import Permissao from './components/permissao/Permissao'
import Modulo from './components/modulo/Modulo'


export default props => (
    <div className="layout-main">
        <Route path="/permissoes" exact component={Permissao} />
        <Route path="/modulos" exact component={Modulo} />
    </div>
)