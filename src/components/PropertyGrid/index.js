import React from "react" 
import PropertyGridTile from "../PropertyGridTile"

/** The grid holding the properties*/
export default class PropertyGrid extends React.Component {
    render() {
        /** If grid is saved items, set button text to Remove, otherwise Add */
        const buttonText = this.props.saved ? "Remove" : "Add";

        let contents;
         /** Empty state if there are no properties */
        if (!this.props.properties.length) contents = <span>No properties</span>;
        
         /** Loop over each property and add a GridTile for each one */
        else contents = this.props.properties.map(property => 
            <PropertyGridTile
            key={property.id} 
            // Assign property as attributes
            {...property} 
            buttonText={buttonText}
            handleClick={this.props.handleClick}
        />);

        return <div className={`propertyGrid ${this.props.className || ''}`}>
            {contents}
        </div>
    }
    
}