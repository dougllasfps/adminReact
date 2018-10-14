import React from 'react'
import PermissaoList from "./PermissaoList";
import If from '../If'

import {search_mode} from '../../main/constants/constants'
import PermissaoForm from "./PermissaoForm";

import {connect} from 'react-redux'

import {pageMode} from './permissaoActions'

class Permissao extends React.Component{
    render(){
        let pageMode = this.props.pageMode || search_mode;
        return (
            <div>
                {pageMode == search_mode ? <PermissaoList /> : <PermissaoForm />}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    pageMode: state.permissoes.pageMode
})

export default connect(mapStateToProps) (Permissao)