import React from "react";

export default function EmployeeCard(props) {
    let imgUrl = "https://i.pravatar.cc/"+props.employee.id;
    console.log(imgUrl);
    return (
        <div className="ui card">
            <div className="image">
                <img src={imgUrl} />
            </div>
            <div className="content">
                <a className="header">{props.employee.firstName}</a>
                <div className="meta">
                    <span className="date">DOB : {props.employee.dob}</span>
                </div>
                <div className="description">
                    Kristy is an art director living in New York.
                </div>
            </div>
            <div className="extra content">
                <a>
                    <i className="user icon"></i>
                    {props.employee.email}
                </a>
            </div>
        </div>
    )
}