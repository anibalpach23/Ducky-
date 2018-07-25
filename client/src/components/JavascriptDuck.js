import React from 'react';
import {  } from 'materialize-css'
import "./Landing.css"
const JSDuck = () =>
<div>
    <div className="row">
        <div className="col s12 center-align">
            <h2>Javascript Duck</h2>
        </div>
    </div>

    <div className="row">
        <div className="col s6">
            {/* <div className="row duckPic"> */}

                <img className="responsive-img" src={require("./Images/JavascriptDuck.jpg")} className="ChatDuckPic" />
            {/* </div> */}
            <div className="row">
              
        
            </div>
        </div>
        <div className="col s6 chatHistory">
            <div className="containerChat">
                <div className="col s8 input-field lineChat left-align">
                    <textarea id="textarea1" class="materialize-textarea"></textarea>
                    <label for="textarea1">Ask your question here!</label>
                </div>
            </div>
        </div>
    </div>
</div>

export default JSDuck; 