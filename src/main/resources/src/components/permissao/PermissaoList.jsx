import React from 'react'
import {DataTable} from 'primereact/datatable';
import {Button} from 'primereact/button';
import {Column} from 'primereact/column';
import {Dialog} from 'primereact/dialog';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Accordion,AccordionTab} from 'primereact/accordion';

import { getList, prepareEditar, remove, prepareInsert, find } from './permissaoActions'
import {InputText} from "primereact/inputtext";

class PermissaoList extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            confirmDelete: false,
            permissaoSelecionada: null,
            descricao: '',
            label: ''
        };

        this.actionButtons = this.actionButtons.bind(this);
        this.showDelete = this.showDelete.bind(this);
        this.hideDelete = this.hideDelete.bind(this);
        this.prepareDelete = this.prepareDelete.bind(this);
        this.confirmDelete = this.confirmDelete.bind(this);
    }

    componentWillMount(){
        this.props.getList()
    }

    actionButtons(rowData, column) {
        return (
            <div>
                <Button type="button" icon="pi pi-pencil" className="p-button-secondary" onClick={() => this.props.prepareEditar(rowData)}  />
                <Button type="button" icon="pi pi-trash"  className="p-button-danger" onClick={() => this.prepareDelete(rowData) } />
            </div>
        )
    }

    prepareDelete(rowData){
        this.setState({...this.state, permissaoSelecionada:rowData.id })
        this.showDelete()
    }

    showDelete(event) {
        this.setState({confirmDelete: true});
    }

    confirmDelete(){
        this.props.remove(this.state.permissaoSelecionada)
        this.hideDelete()
    }

    hideDelete(event) {
        this.setState({confirmDelete: false});
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render(){
        let permissoes = this.props.permissoes || [];

        const confirmDeleteFooter = (
            <div>
                <Button label="Confirma" icon="pi pi-check" onClick={this.confirmDelete} className="p-button-secondary" />
                <Button label="Cancela"  icon="pi pi-times" onClick={this.hideDelete}    className="p-button-danger" />
            </div>
        );

        let {descricao, label} = this.state;

        return (
            <div className="p-grid p-fluid">

                <div className="p-col-12 p-lg-12">
                    <div className="card card-w-title">
                        <h1>Permissões</h1>
                        <div className="p-grid">
                            <div className="p-md-10" />

                            <div className="p-md-2">
                                <Button label="Novo" icon="pi pi-plus" onClick={this.props.prepareInsert}/>
                            </div>

                            <div className="p-md-12">
                                <Accordion>
                                    <AccordionTab header="Campos Pesquisa">
                                        <br />
                                        <div className="p-grid">

                                            <div className="p-md-6">
                                                <InputText id="inputDesc" placeholder="Descrição" name="descricao" onChange={this.handleInputChange.bind(this)} />
                                            </div>

                                            <div className="p-md-6">
                                                <InputText id="inputLabel" placeholder="Label" name="label" onChange={this.handleInputChange.bind(this)} />
                                            </div>

                                            <div className="p-md-2">
                                                <Button label="Pesquisar" icon="pi pi-search" className="p-button-secondary" onClick={() => this.props.find({descricao,label})} />
                                            </div>

                                        </div>
                                    </AccordionTab>
                                </Accordion>
                            </div>

                            <div className="p-md-12">
                                <DataTable value={permissoes}
                                           paginator={true}
                                           rows={10}
                                           rowsPerPageOptions={[5,10,20]} >
                                    <Column field="descricao" header="Descrição"/>
                                    <Column field="label" header="Label"/>
                                    <Column className="colunaAcoes" body={this.actionButtons} header=""/>
                                </DataTable>
                            </div>
                        </div>
                    </div>
                </div>

                <Dialog header="Confirmação"
                        visible={this.state.confirmDelete}
                        width="350px"
                        modal={true}
                        footer={confirmDeleteFooter}
                        minY={70}
                        onHide={this.hideDelete}
                        maximizable={true}
                        blockScroll={true}>
                   Deseja deletar o registro?
                </Dialog>

            </div>
        )
    }
}

const mapStateToProps = state => ({ permissoes: state.permissoes.permissoesList})
const mapDispatchToProps = dispatch => bindActionCreators({getList, prepareEditar, remove, prepareInsert, find}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (PermissaoList)