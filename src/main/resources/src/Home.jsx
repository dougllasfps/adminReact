import React from 'react'
import {InputText} from 'primereact/inputtext';

export default class Home extends React.Component{
    render(){
        return(
            <div className="p-grid p-fluid">
                <div className="p-col-12 p-lg-12">
                    <div className="card card-w-title">
                        <h1>Cadastro</h1>
                        <div className="p-grid">
                            <div className="p-md-6">
                                <InputText placeholder="Name"/>
                            </div>
                            <div className="p-md-6">
                                <InputText placeholder="Email"/>
                            </div>
                            <div className="p-md-6">
                                <InputText placeholder="Phone"/>
                            </div>
                        </div>

                        <div className="p-grid">
                            <div className="p-md-4">
                                <InputText placeholder="Address" />
                            </div>
                            <div className="p-md-4">
                                <InputText placeholder="Disabled" disabled={true} />
                            </div>
                            <div className=" p-md-4">
                                <InputText placeholder="Error" className="p-error"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}