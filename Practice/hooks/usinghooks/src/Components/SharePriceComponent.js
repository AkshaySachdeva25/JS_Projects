import React, {useEffect, useState} from "react";
import axios from "axios";

export default function SharePrice(){
    var [sharePrice,setSharePrice] = useState("")

    useEffect(()=>{
        axios.get("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/NLC").then((response)=>{
            console.log(response.data.data.pricecurrent);
            setSharePrice(response.data.data.pricecurrent)
        })
    },[sharePrice])

    return (
        <div>
            {sharePrice}
        </div>
    )
}