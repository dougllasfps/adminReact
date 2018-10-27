import React from 'react'
import {Button} from "primereact/button";
import { Form } from 'react-final-form'

import arrayMutators from 'final-form-arrays'


export default class DefaultFormPage extends React.Component{

    render(){

        const initialValues = this.props.entity;

        const form = ({ handleSubmit, pristine, invalid }) => (

            <form onSubmit={handleSubmit}>
                <input type="hidden" name="id" />
                <div className="p-grid p-fluid">
                    <div className="p-col-12 p-lg-12">
                        <div className="card card-w-title">
                            <h1><i className={this.props.icon}></i> {this.props.pageTitle}</h1>
                            <br />
                                {this.props.children}
                            <br />
                            <div className="p-grid">
                                <div className="p-md-2">
                                    <Button label={this.props.submitLabel} 
                                            type="submit" 
                                            className="p-button-secondary" 
                                            icon={this.props.entity.id ? 'pi pi-refresh' : 'pi pi-save' } />
                                </div>
                                <div className="p-md-2">
                                    <Button label="Cancelar" 
                                            type="button" 
                                            className="p-button-danger" 
                                            onClick={this.props.handleCancel} 
                                            icon="pi pi-times" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        )

        return(
            <Form mutators={{...arrayMutators}} initialValues={initialValues} onSubmit={this.props.handleSubmit} render={form} />
        )

    }

}