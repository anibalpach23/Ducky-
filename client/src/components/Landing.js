import React, { Component } from 'react';
import { } from "materialize-css";
import { Col, Row, Card, CardTitle } from "react-materialize";
import './Landing.css';


const LandingPage = () =>
    <div>
        {/* Banner Area to explain Ducky Page. */}
        <Row>
            <div className="hero-image">
                <div className="center-align hero-text">
                    <h1>Ask a Duck</h1>
                    <p>
                    These ducks are specialists and can help you with your web development needs! We have three ducks that you can
                    ask about HTML, CSS, and Javascript. 
                    </p>
                </div>
            </div>
        </Row>
        

        <Row>
                <div  className='Title center-align'>
                    <h3>Choose Your Ducky!</h3>
                </div>
        </Row>
        <Row className="DuckCard center-align">
        
        <div className="col s3">
            <div className="card">
                <div className="card-image">
                    <img src={require("./Images/HTMLDuck.jpg")} />
                    <span className="card-title">HTML Duck</span>
                </div>
                <div className="card-content">
                    <p>HTML Duck helps get the foundation ready.</p>
                </div>
                <div className="card-action">
                <a href="./HTMLDuck">This is a link</a>
                </div>
                </div>
            </div>

            <div className="col s3">
                <div className="card">
                    <div className="card-image cssDuck">
                        <img src={require("./Images/CssDuck.jpg")} />
                        <span className="card-title">CSS Duck</span>
                    </div>
                    <div className="card-content">
                        <p>CSS Duck loves fashion and helping people style their websites.</p>
                    </div>
                    <div className="card-action">
                        <a href="./CSSDuck">This is a link</a>
                    </div>
                </div>
        </div>



                <div className="col s3">
                    <div className="card">
                        <div className="card-image">
                            <img src={require("./Images/JavascriptDuck.jpg")} />
                            <span className="card-title">Javascript Duck</span>
                        </div>
                        <div className="card-content">
                            <p>Javscript Duck knows Javascript. Don't get it confused for Java.
                                He doesn't like coffee.
                            </p>
                        </div>
                        <div className="card-action">
                            <a href="./JavascriptDuck">Visit Javascript Duck!</a>
                        </div>
                    </div>
                </div>


        
        </Row>
    </div>

export default LandingPage;