import React from 'react'

import ComponentUtils from '../../../components/util/ComponentUtils'
import GrupoList from "./GrupoList";
import GrupoForm from "./GrupoForm";

import {connect} from 'react-redux'

class Grupo extends React.Component{
    
    render(){
        let pageStatus = this.props.pageStatus ? this.props.pageStatus : ComponentUtils.SEARCH_STATUS;       
        let renderList = pageStatus === ComponentUtils.SEARCH_STATUS

        if( renderList ){
            return (
                <GrupoList />
            )
        }else{
            return (
                <GrupoForm  />
            )
        }
    }
}

export default connect(state => ({ pageStatus: state.grupos.pageStatus })) (Grupo)