import React from 'react'
import {Button} from "primereact/button";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {Dialog} from "primereact/dialog";

export default class DefaultList extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            confirmDelete: false,
            idEntidade: null
        };

        this.actionButtons = this.actionButtons.bind(this);
        this.showDelete = this.showDelete.bind(this);
        this.hideDelete = this.hideDelete.bind(this);
        this.prepareDelete = this.prepareDelete.bind(this);
        this.confirmDelete = this.confirmDelete.bind(this);
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
        this.setState({...this.state, idEntidade:rowData.id })
        this.showDelete()
    }

    showDelete(event) {
        this.setState({confirmDelete: true});
    }

    confirmDelete(){
        this.props.remove(this.state.idEntidade)
        this.hideDelete()
    }

    hideDelete(event) {
        this.setState({confirmDelete: false});
    }

    render(){

        const confirmDeleteFooter = (
            <div>
                <Button label="Confirma" icon="pi pi-check" onClick={this.confirmDelete} className="p-button-secondary" />
                <Button label="Cancela"  icon="pi pi-times" onClick={this.hideDelete} className="p-button-danger" />
            </div>
        );

        let colunaAcoes = {body: this.actionButtons, header: '',className: 'colunaAcoes', field : 'acaoId'};

        let cols = this.props.columns || [];
        cols.push(colunaAcoes)

        let dynamicColumns = cols.map((col,i) => {
            return <Column key={col.field} field={col.field} header={col.header} body={col.body} className={col.className} />;
        });

        return(
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
                                <DataTable value={this.props.list}
                                           paginator={true}
                                           rows={10}
                                           rowsPerPageOptions={[5,10,20]} >
                                    {dynamicColumns}
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