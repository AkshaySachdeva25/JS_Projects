import React, {useState} from "react";
import Axios from "axios";

export default class UpdateComponent{
    constructor(){
        super();
        const [Customer,setCustomer] = useState({
            firstName : "",
            lastname : "",
            username: "",
            password: ""
        })
    }

    render(){
        return (
            <div>
                <br></br>
                <h1>Customer Form</h1>
                <form className="ui form" onSubmit={(e) => submitHandler(e)}>
                    <div className="field">
                        <label>First Name</label>
                        <input type="text" name="firstName" placeholder="First Name" value={Customer.firstName} onChange={changeHadler} />
                    </div>
                    <div className="field">
                        <label>Last Name</label>
                        <input type="text" name="lastname" placeholder="Last Name" value={Customer.lastname} onChange={changeHadler} />
                    </div>
                    <div className="field">
                        <label>First Name</label>
                        <input type="email" name="username" placeholder="Email" value={Customer.username} onChange={changeHadler} />
                    </div>
                    <div className="field">
                        <label>First Name</label>
                        <input type="password" name="password" value={Customer.password} placeholder="Password" onChange={changeHadler} />
                    </div>
                    <button className="ui button" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}