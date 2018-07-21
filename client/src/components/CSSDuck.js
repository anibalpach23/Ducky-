import React from 'react';
import {  } from 'materialize-css'
import "./Landing.css"

const CSSDuck = () =>
<div>
    <div className="row">
        <div className="col s12 center-align">
            <h2>CSS Duck</h2>
        </div>
    </div>

    <div className="row">
        <div className="col s6 ">
            {/* <div className="row duckPic"> */}
            <img className="responsive-img" src={require("./Images/CssDuck.jpg")} className="ChatDuckPic" />
            {/* </div> */}
            <div className="row">
                <div className="col s8 input-field lineChat">
                    <textarea id="textarea1" class="materialize-textarea"></textarea>
                    {/* <label for="textarea1">Ask your question here!</label> */}
                </div>
                {/* <div className="col s4 subButton"> */}
                    {/* <a className="waves-effect waves-light btn">submit</a> */}
                {/* </div> */}
            </div>
        </div>
        <div className="col s4 chatHistory">
            <div className="containerChat">
            </div>
        </div>
    </div>
</div>

export default CSSDuck; 