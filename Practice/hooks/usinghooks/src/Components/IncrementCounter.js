import {useEffect, useState} from 'react';


export default function IncrementCounter(){
    var [counter,setCounter] = useState(0);

        setTimeout(() => {
            setCounter(counter+1)
        }, 1000);


    return (
        <>
            <h1>Counter Value : {counter}</h1>
        </>
    )
}