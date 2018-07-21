import React, { Component } from 'react';
import { } from "materialize-css";
import { Col, Row, Card, CardTitle } from "react-materialize";
import './Landing.css';


const LandingPage = () =>
    <div>
        <Row>
            <Col s={3} className='Empty'></Col>
                <Col s={5} className='Title'>
                    <h1>Choose Your Ducky!</h1>
                </Col>
            <Col s={4} className='Empty'></Col>
        </Row>
        <Row className="DuckCard">
        
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