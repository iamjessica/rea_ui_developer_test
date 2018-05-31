import React from "react" 

/**
 * Grid Tile component - individual property
 */
export default class PropertyGridTile extends React.Component {
    render() {        
        return <div className="propertyGridTile">
            <header style={
                {backgroundColor: this.props.agency.brandingColors.primary}
            }>
                <img src={this.props.agency.logo} alt="agency logo"/>
            </header>
            <img src={this.props.mainImage} className="background" alt="property"/>
            <p>{this.props.price}</p>
            {/** Clickhandler passing clicked id to the function assigned to its parent.*/}
            <button onClick={() =>this.props.handleClick(this.props.id)}>{this.props.buttonText}</button>
        </div>
    }   
}