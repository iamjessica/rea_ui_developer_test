import React from "react" 
import PropertyGridTile from "../PropertyGridTile"

export default class PropertyGrid extends React.Component {
    render() {
        console.log(this.props.properties);
        
        return <div className="propertyGrid">
            {this.props.properties.map(property => 
                <PropertyGridTile key={property.id} {...property} />
            )}
        </div>
    }
    
}