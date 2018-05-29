import React from "react" 

export default class PropertyGrid extends React.Component {
    render() {
        console.log(this.props.properties);
        
        return <div>
            {this.props.properties.map(property => <div>
                {property.id}
            </div>)}
        </div>
    }
    
}