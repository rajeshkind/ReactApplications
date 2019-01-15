
import React, { Component } from 'react';
import '../Styles/App.css';

class Liveweather extends Component {
  render() {
    return (
        <div style={{padding:20}}>
           { this.props.temperature && <span style={{color:"grey", fontSize:35}}>{this.props.temperature} &#8451; </span>
           }<br/>
           {this.props.city && this.props.country && <span style={{color:"grey", fontSize:20}}>{this.props.city}, {this.props.country}</span>}  
           {this.props.humidity && <span style={{color:"grey", fontSize:20, float:"right", paddingRight:"20px"}}>Hum :  {this.props.humidity}</span>}
           {this.props.error && <p style={{color:"red", fontSize:20, textAlign:"center"}}>{this.props.error}</p>}
        </div>
    );
  }
}

export default Liveweather;