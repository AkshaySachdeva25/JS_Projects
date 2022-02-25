import React from "react"


export default function EmployeeDetailComponent(props) {
    var details = props.details
    var imgstyle = {
        width: "18rem",
        "margin-right": "2rem",
        
    }
    return (
        <div>
            <div class="card" style={imgstyle}>
                <img class="card-img-top" src={details["avatar"]} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">{details.name}</h5>
                    <p class="card-text"> {details.id}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>

    )
}