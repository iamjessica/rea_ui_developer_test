import React from "react" 

export default class PropertyGridTile extends React.Component {
    render() {
        console.log(this.props);
        
        return <div className="propertyTile">
            <header style={
                {backgroundColor: this.props.agency.brandingColors.primary}
            }>
                <img src={this.props.agency.logo} />
            </header>

            <img src={this.props.mainImage} class="background"/>
            <p>{this.props.price}</p>
            <button onClick={() =>this.props.handleClick(this.props.id)}>{this.props.buttonText}</button>
        </div>
    }   
}