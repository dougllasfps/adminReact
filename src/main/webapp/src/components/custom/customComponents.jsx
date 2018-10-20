import React from 'react';

export default class DropDown extends React.Component {

  renderSelectOptions = (obj) => (
    <option key={obj.key} value={obj.value}>{obj.label}</option>
  )

  render() {
    const { input } = this.props;
    const options = this.props.options || []

    console.log(`options: ${this.props.options}`)

    return (
        <select {...input} className={this.props.className}>
          <option value="">Selecione...</option>
          {
              options.map(this.renderSelectOptions)}
          }
        </select>
    );
  }
}