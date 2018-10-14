import React from 'react'
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";

export default (props) => (
    <div className="p-grid p-fluid">

        <div className="p-col-12 p-lg-12">
            <div className="card card-w-title">
                <h1>Cadastro de Permissão</h1>
                <div className="p-grid">
                    <div className="p-md-6">
                        <InputText placeholder="Descrição"/>
                    </div>
                    <div className="p-md-6">
                        <InputText placeholder="Label"/>
                    </div>
                </div>
            </div>
        </div>

    </div>
)