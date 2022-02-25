import React from "react";
import { Component } from "react";
import Axios from "axios";

export default class Cusomer extends Component {
    constructor() {
        super();
        this.state = {
            customer: [],
            firstName: "",
            lastname: "",
            username: "",
            password: ""

        }

    }
    

    

    render() {
        return (
            <div>
                <table className="ui single line table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Registration Date</th>
                            <th>E-mail address</th>
                            <th>Premium Plan</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.customer.map((customer) => {
                            return <CustomerDetails key={customer.id} customer={customer}></CustomerDetails>
                        })}
                    </tbody>
                </table>
                
            </div>
        )
    }

    componentDidMount() {
        var getCustomer = Axios.get("https://localhost:5005/api/Customer/GetAll");
        getCustomer.then((success) => {
            console.log(success.data);
            this.setState({
                customer: success.data
            })
        })
    }

}

function CustomerDetails(props) {
    return (
        <tr>
            <td>{props.customer.id}</td>
            <td>{props.customer.firstName}</td>
            <td>{props.customer.lastname}</td>
            <td>{props.customer.username}</td>
        </tr>
    )
}


