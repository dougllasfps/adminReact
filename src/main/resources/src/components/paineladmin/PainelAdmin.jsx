import React from 'react'

import {Card} from 'primereact/card';

class PainelAdmin extends React.Component{

    render(){
        return(
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Administração</h1>
                        <p>Selecione uma das opções abaixo para Gerencia do Sistema.</p>
                    </div>
                </div>

                <div className="p-grid p-fluid">
                    <div className=" p-lg-6">
                        <Card title="Simple Card">
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                                quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</div>
                        </Card>
                    </div>
                    <div className="p-lg-6">
                        <Card title="Advanced Card" subTitle="Subtitle" className="ui-card-shadow">
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                                quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</div>
                        </Card>
                    </div>
                </div>

            </div>
        )
    }
}

export default PainelAdmin