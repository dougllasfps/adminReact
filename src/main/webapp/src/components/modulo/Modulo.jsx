import React from 'react'

import ModuloList from './ModuloList'
import ModuloForm from './ModuloForm'

import {search_mode} from '../../main/constants/constants'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {submit} from './moduloActions'

class Modulo extends React.Component{

    render(){
        let pageMode = this.props.pageMode || search_mode;
        return (
            <div>
                {pageMode === search_mode ? <ModuloList /> : <ModuloForm onSubmit={this.props.submit} />}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    pageMode: state.modulos.pageMode
})

const mapDispatchToProps = dispatch => bindActionCreators ( {submit}, dispatch)


export default connect(mapStateToProps,mapDispatchToProps) (Modulo)