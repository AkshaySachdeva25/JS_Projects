import React from 'react';
import ReactDOM from 'react-dom';
import Customer from './Components/Coustomer'
import CustomerHooks from './Components/CustomerHooks';
import Axios from 'axios';
import Main from './Components/singlePageApplication/MainComponent'
import NewComponent, { NewOther, NewOtherComponent } from './Components/singlePageApplication/HigherOrderComponent';

ReactDOM.render(
        <div className='ui container'>
            <NewComponent></NewComponent>
            <NewOtherComponent></NewOtherComponent>
            <NewOther></NewOther>
        </div>,
        document.getElementById("root")
)