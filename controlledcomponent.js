import React, { Component } from "react";
import "./design.css"
class Controlledcomponent extends Component{
    constructor (props) {
        super(props);
        this.props = props;
        this.state = {
            name:"sandeep is a good boy"
        }
    }
    play = (event) => {
        console.log(this.state);
         const  name = event.target.value;
        this.setState({ name }, () => {
           console.log(this.state);  
         });
    }
    render() {
        return (
            <div>
                <input className="tag" type="text" value={this.state.name} onChange={this.play}></input>
          </div>
      )
  }  
}
export default Controlledcomponent; 