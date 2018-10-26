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
                            <h1>{this.props.pageTitle}</h1>
                            <br />
                                {this.props.children}
                            <div className="p-grid">
                                <div className="p-md-2">
                                    <button type="submit" name="submitButton" className="p-button p-component p-button-secondary p-button-text-only" >
                                        <span className="p-button-text p-c">{this.props.submitLabel}</span>
                                    </button>
                                </div>
                                <div className="p-md-2">
                                    <Button label="Cancelar" type="button" className="p-button-danger" onClick={this.props.handleCancel} />
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