import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import BrowserRouter from "react-router-dom/BrowserRouter";
import CustomerForm from "../CustomerFormCompnent";
import CustomerHooks from "../CustomerHooks";

export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            name: ""
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Body></Body>
                </div>
            </BrowserRouter>
        )
    }
}
function Body() {
    return(
        <div>
                
                    <div className="ui pointing menu">
                        <Link className="item active" to="/"> List </Link>
                        <Link className="item" to="/create">
                            Create Emoployee
                        </Link>
                        <Link className="item" to="/">
                            More
                        </Link>
                    </div>
                    <div className="ui segment">
                    <Route exact path="/" component={CustomerHooks}></Route>
                    <Route exact path="/create" component={CustomerForm}></Route>
                    </div>
        </div>
    )
}