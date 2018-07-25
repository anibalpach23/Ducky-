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
        </div>
        <div className="col s6 chatHistory">
            <div className="containerChat">
                
            </div>
            
        </div>
    </div>
    <div className="row">
        <div className="col s6"></div>
        <div className="col s4 input-field lineChat">
            <textarea id="textarea1" class="materialize-textarea" placeholder="Ask your question"></textarea>
        </div>
        <div className="col s2">
            <a class="waves-effect waves-light btn submitButton">button</a>
        </div>
    
    </div>
</div>

export default HTMLDuck; 