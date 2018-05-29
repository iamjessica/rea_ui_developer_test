import React from "react" 
import PropertyGridTile from "../PropertyGridTile"

export default class PropertyGrid extends React.Component {
    render() {
        const className = this.props.saved ? "saved" : "results";
        const buttonText = this.props.saved ? "Remove" : "Save";
        
        return <div className={`propertyGrid ${this.props.className || ''}`}>
            {this.props.properties.map(property => 
                <PropertyGridTile 
                key={property.id} 
                {...property} 
                buttonText={buttonText}
                handleClick={this.props.handleClick}
            /> )}
        </div>
    }
    
}