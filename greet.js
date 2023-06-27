import React, { Component } from "react";
class Greet extends Component{
    constructor (props) {
        super(props);
        this.props = props;
        this.state = {
            
        }
        
    }
    render() {
        return (
            <div className="container">
                <h3>Name : {this.props.magic}</h3>
                <h3>Email :{this.props.magic1}</h3>
                <h3>thankyou for resitration</h3>

            </div>
        )
    }
}
export default Greet;