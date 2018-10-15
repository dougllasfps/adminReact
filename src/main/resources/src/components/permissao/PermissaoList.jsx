import React from 'react'
import {DataTable} from 'primereact/datatable';
import {Button} from 'primereact/button';
import {Column} from 'primereact/column';
import {Messages} from 'primereact/messages'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {getList, prepareEditar} from './permissaoActions'

class PermissaoList extends React.Component{

    constructor(props){
        super(props)
        this.actionButtons = this.actionButtons.bind(this);
        this.showSuccess = this.showSuccess.bind(this);
    }

    componentWillMount(){
        this.props.getList();
    }

    actionButtons(rowData, column) {
        return (
            <div>
                <Button type="button" icon="pi pi-pencil" className="p-button-secondary" onClick={() => this.props.prepareEditar(rowData)}  />
                <Button type="button" icon="pi pi-trash"  className="p-button-danger" onClick={() => this.showSuccess()} />
            </div>
        )
    }

    showSuccess() {
        this.messages.show({severity: 'success', summary: 'Success Message', detail: 'Order submitted'});
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
                                    <Column className="colunaAcoes" body={this.actionButtons} header=""/>
                                </DataTable>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => ({ permissoes: state.permissoes.permissoesList})
const mapDispatchToProps = dispatch => bindActionCreators({getList, prepareEditar}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (PermissaoList)