import React, { Component } from 'react';
import { Card, CardTitle, Row, Col } from 'react-materialize';
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
        
        <Col s={3} className='Card'>
            <Card className='small'
                    header={<CardTitle image='./Images/JavascriptDuck.jpg'>Javascript Duck</CardTitle>}
                    actions={[<a href='#'>Ask Javascript Duck!</a>]}>
                    Javascript Duck is very knowledgeable in Javascript. 
            </Card>
        </Col>

        <Col s={3} className='Card'>
                <Card className='small'
                    header={<CardTitle image={"./Images/JavascriptDuck.jpg"}>Javascript Duck</CardTitle>}
                    actions={[<a href='#'>Ask Javascript Duck!</a>]}>
                    Javascript Duck is very knowledgeable in Javascript. 
                </Card>
        </Col>

        <Col s={3} className='Card'>
            <Card className='small'
                header={<CardTitle image={"./Images/JavascriptDuck.jpg"}>Javascript Duck</CardTitle>}
                actions={[<a href='#'>Ask Javascript Duck!</a>]}>
                Javascript Duck is very knowledgeable in Javascript. 
            </Card>
        </Col>
       
        </Row>
    </div>

export default LandingPage;