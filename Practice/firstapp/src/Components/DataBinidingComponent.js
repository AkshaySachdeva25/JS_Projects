import React from "react";

export default function DataBiniding(params) {   
    
        var username = "Hello";
        function changeValue(event) {
            username = 434
            console.log(event.target.value);
        }
    return (
        <div>
            Enter Username : <input id="" name="" value={username} onClick={changeValue}/>
        </div>
    )
 }