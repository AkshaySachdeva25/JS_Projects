import React, { Component } from "react";
import axios from "axios";
import SpaceXcard from "./SpacexCard";

export default class SpaceXDetails extends Component{
    constructor(){
        super();
        this.state = {
            spacexList : []
        }
    }


    render(){
        return (
            <div className="container">
                {this.state.spacexList.map((rocket) => {
                    return <SpaceXcard key={rocket.flight_number} rocket = {rocket} deleteItem = {this.deleteItem}></SpaceXcard>
                })}
            </div>
        )
    }


    componentDidMount(){
        var spacexRequest = axios.get("https://localhost:5001/api/Rocket/GetAll");
        spacexRequest.then((response) => {
            this.setState({
                spacexList : response.data
            })
            console.log(response.data)
        },(failed) => {
            console.log(failed);
        })
        
    }

    deleteItem = (event) => {
        var response = axios.delete("https://localhost:5001/api/Rocket/delete/"+event.target.id)
        response.then((response) => {
            console.log(response.status);
        })  
    }
}
