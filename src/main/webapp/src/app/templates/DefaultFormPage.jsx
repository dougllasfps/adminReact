import React from 'react'
import {Button} from "primereact/button";

export default class DefaultFormPage extends React.Component{

    render(){
        return(
            <form>
                <input type="hidden" name="id" />
                <div className="p-grid p-fluid">
                    <div className="p-col-12 p-lg-12">
                        <div className="card card-w-title">
                            <h1>{this.props.pageTitle}</h1>
                            <br />
                                {this.props.children}
                            <div className="p-grid">
                                <div className="p-md-2">
                                    <button type="submit" name="submitButton" onClick={this.props.handleSubmit} className="p-button p-component p-button-secondary p-button-text-only" >
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

    }

}