import React, { Component } from "react";
import "./regis.css"
class Resister extends Component{
    constructor (props) {
        super(props);
        this.props = props;
        this.state = {
            
        }
    }
    render() {
        let btnstyle;
        btnstyle = {
            backgroundColor: "green",
            color: "white",
            
        }
        let btntext,passbox;

        if (this.props.showpass === true) {
            btnstyle.backgroundColor = "red"
            btntext = "hide password"
            passbox="password"
        } else {
            btntext = "show password"
            passbox="type"
        }
        
        return (
            <div className="container card p-3">
                <form onSubmit={this.props.submit}>
                    <div className="form-group" >
                        <h3>Registration form</h3>
                        <label className="sk" htmlFor="">Name</label>
                        <input className="form-control" name="name" required type="text"></input><br></br>
                        <label htmlFor="">Password</label>
                        <input className="form-control" name="password" required  type={passbox}></input><br></br>
                        <label htmlFor="">Email address</label>
                        <input className="form-control" name="email" required type="email"></input>
                    </div>{"   "} <br></br>
                    <button className="btn btn-primary"  type="submit">Resister</button> {"  "}
                    <button type="button" onClick={this.props.handle} className="btn" style={btnstyle}>{ btntext}</button>
</form>
            </div>
        )
    }
}
export default Resister;

