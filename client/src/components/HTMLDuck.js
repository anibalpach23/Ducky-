import React from 'react';
import {  } from 'materialize-css'
import "./Landing.css"



const HTMLDuck = () =>
<div>
    <div className="row">
        <div className="col s12 center-align">
            <h2>HMTL Duck</h2>
        </div>
    </div>

    <div className="row">
        <div className="col s6">
            {/* <div className=" duckPic left-align"> */}
                <img className="responsive-img" src={require("./Images/HTMLDuck.jpg")} className="ChatDuckPic" />
            {/* </div> */}
            <div className="row">
                <div className="col s8 input-field lineChat">
                    <textarea id="textarea1" class="materialize-textarea" placeholder="Ask your question"></textarea>
                    {/* <label for="textarea1">Ask your question here!</label> */}
                    {/* <a className="waves-effect waves-light btn">submit</a> */}
                </div>
                {/* <div className="col s4 subButton"> */}
                    {/* <a className="waves-effect waves-light btn">submit</a> */}
                {/* </div> */}
            </div>
        </div>
        <div className="col s6 chatHistory">
            <div className="containerChat">
            </div>
        </div>
    </div>
</div>

export default HTMLDuck; 