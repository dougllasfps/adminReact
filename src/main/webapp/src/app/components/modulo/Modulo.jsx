import React from 'react'

import ModuloList from './ModuloList'
import ModuloForm from './ModuloForm'
import ComponentUtils from '../../../components/util/ComponentUtils'


import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {submit} from './moduloActions'

class Modulo extends React.Component{

    render(){
        let pageStatus = this.props.pageStatus ? this.props.pageStatus : ComponentUtils.SEARCH_STATUS;       
        let renderList = pageStatus === ComponentUtils.SEARCH_STATUS

        if(renderList){
            return (
                <ModuloList />
            )
        }else{
            return (
                <ModuloForm onSubmit={this.props.submit} />
            )
        }
    }
}

export default connect(
    state => ({
        pageStatus: state.modulos.pageStatus
    }),
    dispatch => bindActionCreators ( {submit}, dispatch )
) (Modulo)