import React from 'react'
import {Field} from "redux-form";
import {Button} from "primereact/button";

export default class DefaultFormPage extends React.Component{

    render(){
        return(
            <form onSubmit={this.props.handleSubmit}>
                <Field component="input" type="hidden" name="id" />
                <div className="p-grid p-fluid">
                    <div className="p-col-12 p-lg-12">
                        <div className="card card-w-title">
                            <h1>{this.props.pageTitle}</h1>
                            <br />
                            <div className="p-grid">
                                {this.props.children}
                            </div>
                            <div className="p-grid">
                                <div className="p-md-2">
                                    <Field type="submit" component="button" name="submitButton" className="p-button p-component p-button-secondary p-button-text-only" >
                                        <span className="p-button-text p-c">{this.props.submitLabel}</span>
                                    </Field>
                                </div>
                                <div className="p-md-2">
                                    <Button label="Cancelar" className="p-button-danger" onClick={this.props.handleCancel} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )

    }

}