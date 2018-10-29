import React from 'react'

import {InputText} from "primereact/inputtext";

import DefaultListPage from '../../templates/DefaultListPage'
import {ModuloContext} from './Modulo'
import {handleChange} from '../../../components/util/ComponentUtils'


export default class ModuloList extends React.Component{

    state = {
        descricao: '',
        label: ''
    };

    render(){
        let cols = [
            {field: 'id', header : 'Código'},
            {field: 'descricao', header: 'Descrição'},
            {field: 'label', header: 'Label'}
        ];

        return (
            <ModuloContext.Consumer>
                { context => (
                    <DefaultListPage
                        icon="pi pi-th-large"
                        pageTitle=" Módulos"
                        prepareInsert={context.prepareInsert}
                        prepareEditar={context.prepareEditar}
                        getList={() => context.findAll()}
                        findAction={() => context.find()}
                        remove={() => context.remove}
                        list={context.state.list}
                        columns={cols} >

                        <div className="p-grid">
                            <div className="p-md-6">
                                <InputText id="inputDesc" 
                                        placeholder="Descrição" 
                                        name="descricao" 
                                        onChange={ (e) =>  handleChange(e, this) } />
                            </div>

                            <div className="p-md-6">
                                <InputText id="inputLabel" 
                                        placeholder="Label" 
                                        name="label" 
                                        onChange={ (e) =>  handleChange(e, this) } />
                            </div>
                        </div>

                    </DefaultListPage>
                )}
            </ModuloContext.Consumer>            
        )
    }
}
