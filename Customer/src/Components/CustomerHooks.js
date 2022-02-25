import Axios from "axios";
import React, { useEffect, useState } from "react";
import CustomerForm from "./CustomerFormCompnent";

export default function CustomerHooks() {

    var [customerDetails, setCustomerDetails] = useState([])

    useEffect(() => {
        var getCustomer = Axios.get("https://localhost:5005/api/Customer/GetAll");
        getCustomer.then((success) => {
            console.log(success.data);
            setCustomerDetails(success.data)
        })
    }, [])

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
                    {customerDetails.map((customer) => {
                        return <CustomerDetails key={customer.id} customer={customer}></CustomerDetails>
                    })}
                </tbody>
            </table>
        </div>
    )
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

function CustomerComponent() {
    return 
}

function ChildCustomerComponent(){
    return (
        <div>
            
        </div>
    )
}