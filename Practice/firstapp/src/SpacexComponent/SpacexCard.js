import React from "react";
import axios from "axios";

export default function SpaceXcard(props) {
    let imageUrl = "https://i.pravatar.cc/";
    return (
        
        <div className="ui card">
            <div className="image">
                <img src={props.rocket.links.mission_patch_small} />
            </div>
            <div className="content">
                <a className="header">as</a>
                <div className="meta">
                    <span className="date">sd</span>
                </div>
                <div className="description">
                    Kristy is an art director living in New York.
                </div>
            </div>
            <div className="extra content">
                <a>
                    <i className="user icon"></i>
                    ad
                </a>
                <button className="ui red button" onClick={props.deleteItem}>
                    delete
                </button>
            </div>
        </div>
    )
    
    
}

