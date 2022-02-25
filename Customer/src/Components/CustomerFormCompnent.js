import React, {useState} from "react";
import { Axios } from "axios";

export default function CustomerForm(props) {

    const [Customer,setCustomer] = useState({
        firstName : "",
        lastname : "",
        username: "",
        password: ""
    })


    function submitHandler(e){
        e.preventDefault();
        var res =Axios.post("https://localhost:5005/api/Customer/saveCustomer",{
            firstName : Customer.firstName,
            lastname : Customer.lastname,
            username : Customer.username,
            password : Customer.password
        }).then(res =>{
            console.log(res.data);
        })
    }

    var changeHadler = e => {
        const data = {...Customer}
        data[e.target.name] = e.target.value
        setCustomer(data)
        console.log(data);
    }
    
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

