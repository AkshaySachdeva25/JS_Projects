import React from "react";
import Child from "./ChildComponent";

export default function Parent(props) {
    return (
        <Child value = {props.value} ></Child>
    )
}