import React from 'react'

import ComponentUtils from '../../../components/util/ComponentUtils'
import PermissaoList from "./PermissaoList";
import PermissaoForm from "./PermissaoForm";

import {connect} from 'react-redux'

class Permissao extends React.Component{
    
    render(){
        let pageStatus = this.props.pageStatus ? this.props.pageStatus : ComponentUtils.SEARCH_STATUS;       
        let renderList = pageStatus === ComponentUtils.SEARCH_STATUS

        if( renderList ){
            return (
                <PermissaoList />
            )
        }else{
            return (
                <PermissaoForm  />
            )
        }
    }
}

export default connect(state => ({ pageStatus: state.permissoes.pageStatus })) (Permissao)