import React, { Component } from "react";
import EmployeeCard from "./EmployeeCard";


export default class EmployeeDetail extends Component {
    constructor() {
        super();
        this.state = {
            search: "",
            employeeList: this.dummyEmployees,
        }
    }

    filterSearch(e){
        if(e.target.value === "" ){
            this.setState({
                search : this.dummyEmployees,
            })
        }
        this.setState({
            search: e.target.value,
            employeeList: this.dummyEmployees.filter((employee)=>{
                return employee.name.includes(this.state.search);
            })
        })
    }

    render() {
        return (
            <div className="container">
                <h1 className="mt-4 mb-4 text-light">Filter Search</h1>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" value={this.state.search} onChange={(e) => this.filterSearch(e)} placeholder="Serch Employee" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                </div>
                <div className="container mt-5 mb-5">
                    <div className="row g-2">
                        {
                            this.state.employeeList.map((employee) => {
                                return (
                                    <EmployeeCard key={employee.id} employee={employee} ></EmployeeCard>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }

    dummyEmployees = [
        { id: 1, name: "Patrik", age: 26, designation: "Junior Developer", imageUrl: "https://i.pravatar.cc/100" },
        { id: 2, name: "Grace", age: 37, designation: "FullStack Developer", imageUrl: "https://i.pravatar.cc/112" },
        { id: 3, name: "Chesed", age: 27, designation: "Junior Developer", imageUrl: "https://i.pravatar.cc/115" },
        { id: 4, name: "Tadesse", age: 26, designation: "Backend Developer", imageUrl: "https://i.pravatar.cc/116" },
        { id: 5, name: "Tadesse", age: 46, designation: "Frontend Developer", imageUrl: "https://i.pravatar.cc/117" },
        { id: 6, name: "Helga Tommi", age: 26, designation: "Frontend Developer", imageUrl: "https://i.pravatar.cc/118" },
        { id: 7, name: "Astra Gianfranco", age: 34, designation: "Backend Developer", imageUrl: "https://i.pravatar.cc/120" },
        { id: 8, name: "Galilahi Antinanco", age: 47, designation: "Manager", imageUrl: "https://i.pravatar.cc/70" },
    ]
}

