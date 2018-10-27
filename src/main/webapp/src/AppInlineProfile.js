import React, { Component } from 'react';
import classNames from 'classnames';

export class AppInlineProfile extends Component {

    constructor() {
        super();
        this.state = {
            expanded: false
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        this.setState({expanded: !this.state.expanded});
        event.preventDefault();
    }

    render() {
        return  (
            <div className="profile">
                <div>
                    <img src="assets/layout/images/avatar_2.png" alt="" />
                </div>
                <a className="profile-link" onClick={this.onClick}>
                    <span className="username">Dougllas Sousa</span>
                    <i className="pi pi-fw pi-cog"/>
                </a>
                <ul className={classNames({'profile-expanded': this.state.expanded})}>
                    <li><a><i className="pi pi-fw pi-user"/><span>Conta</span></a></li>
                    <li><a><i className="pi pi-fw pi-inbox"/><span>Notificações</span><span className="menuitem-badge">2</span></a></li>
                    <li><a><i className="pi pi-fw pi-power-off"/><span>Sair</span></a></li>
                </ul>
            </div>
        );
    }
}