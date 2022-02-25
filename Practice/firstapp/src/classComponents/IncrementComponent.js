import { Component } from "react";
import DataBiniding from "./DataBinding";


export default class IncrementCounter extends Component{
    constructor(){
        super();
        this.state = {
            name: "",
            counter: 1
        }   
    }
    handleChange = event => {
        this.setState({
          name: event.target.value
        })
      }

    render(){
        console.log("Render");
        return <div>
            <label htmlFor="name"> Enter Name</label>
            <input placeholder="Name" id="name" value={this.state.name} onChange={this.handleChange} ></input> <br/>
            <label>Name is : {this.state.name}</label>
            {this.state.counter}
            <DataBiniding name={this.state.name}> </DataBiniding>
        </div>
    }
    componentDidMount(){
        console.log("Mounted");
        setInterval(() => {
            this.setState({
                counter: this.state.counter +1
            }) 
        }, 1000);
    }

    componentDidUpdate(){
        console.log("Updated");
    }

    shouldComponentUpdate(nextprops,nextState){
        console.log("after setstate but before render");
        if(nextState.counter % 3 == 0 ){
            return false;
        }
        console.log(nextState);
        return true;
    }
    componentWillUnmount(){
        console.log("Unmounting");
    }

}