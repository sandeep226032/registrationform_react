import React, { Component } from "react";
class Form extends Component{
    constructor (props) {
        super(props);
        this.props = props;
        this.state = {
            name: null,
            country:null,

        }
        
    }
    play = (event) => {
            console.log(event.target.value);
    
    }
    on =
        (e) => {
            console.log(e);
            
        }
    submit = (event) => {
        event. preventDefault();
        console.log(this.state);
        const name = event.target.name.value;
        const country = event.target.country.value;
        this.setState({ name, country }, () => {
            console.log(this.state)
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submit}>
                <label htmlFor="">name</label>
                <input  name="name" type="text" onKeyUp={this.play}></input>
                <label htmlFor="">country</label>
                <select name="country" onChange={this.on}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                    <button type="submit">submit</button>
                    </form>
            </div>
        )
    }
}
export default Form;