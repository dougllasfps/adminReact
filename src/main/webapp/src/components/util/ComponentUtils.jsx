const ComponentUtils = {
    handleChange : (event, reactComponent) => {
        
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        reactComponent.setState({ [name]: value })
    }
}

ComponentUtils.INSERT_STATUS = '0'
ComponentUtils.UPDATE_STATUS = '1'
ComponentUtils.SEARCH_STATUS = '2'
ComponentUtils.READ_STATUS   = '3'

export const handleChange = ComponentUtils.handleChange
export default ComponentUtils