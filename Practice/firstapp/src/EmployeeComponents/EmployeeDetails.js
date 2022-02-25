import React, { Component } from "react";
import axios from "axios";
import EmployeeCard from "./EmployeeCard";

export default class EmployeeDetails extends Component{
    constructor(){
        super();
        this.state = {
            employeeList : []
        }
    }

    render(){
        return (
            <div className="container">
                {
                    this.state.employeeList.map((employee)=>{
                        return <EmployeeCard key={employee.id} employee={employee}></EmployeeCard>
                    })
                }
            </div>
        )
    }
    
    componentDidMount(){
        var promiseData = axios.get("https://hub.dummyapis.com/employee")
        promiseData.then((response)=>{
            this.setState({
                employeeList : response.data
            })
            console.log(this.state.employeeList);
        })
    }
}