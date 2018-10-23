import React from 'react'

import ComponentUtils from '../../../components/util/ComponentUtils'
import PermissaoList from "./PermissaoList";
import PermissaoService from './PermissaoService'

import PermissaoForm from "./PermissaoForm";

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import { submit } from './permissaoActions'

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