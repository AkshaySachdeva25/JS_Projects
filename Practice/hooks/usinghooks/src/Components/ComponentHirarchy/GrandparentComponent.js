import React from "react";
import Parent from "./ParentComponent";

export default function GrandParent() {
    return(
        <Parent value = {props.value} ></Parent>
    )
}