import React from 'react'
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {getList} from './permissaoActions'

class PermissaoList extends React.Component{

    componentWillMount(){
        this.props.getList();
    }

    render(){
        let permissoes = this.props.permissoes || [];

        return (
            <div className="p-grid p-fluid">

                <div className="p-col-12 p-lg-12">
                    <div className="card card-w-title">
                        <h1>Permissões</h1>
                        <div className="p-grid">
                            <div className="p-md-12">
                                <DataTable value={permissoes} >
                                    <Column field="descricao" header="Descrição"/>
                                    <Column field="label" header="Label"/>
                                </DataTable>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => ({ permissoes: state.permissoes.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (PermissaoList)