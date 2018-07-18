import React, { Component } from 'react';
import { 
    Link,
    withRouter,
 } from 'react-router-dom';

import { auth } from '../firebase';
import * as routes from '../constants/routes';

import {Button, Row, Col} from 'react-materialize';



const SignUpPage = ({history}) =>
    <div>
        <Row>
            <Col s={4} className='Empty'></Col>
                <Col s={4} className='Title'>
                    <h1>Sign Up Page</h1>
                </Col>
            <Col s={4} className='Empty'></Col>
        </Row>
        <SignUpForm history={history}/>
    </div>

//Start initial state for Sign Up 
const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};


const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
})


//Creating the Sign Up Form
class SignUpForm extends Component {
    constructor(props) {
        super(props);
        
        //Reference the state here
        this.state = { ...INITIAL_STATE };
    }

    onSubmit = (event) => {
        const {
            username,
            email,
            passwordOne,
        } = this.state;

        const {
            history,
        }= this.props;

        //Calls back to the firebase file to create the id. 
        auth.doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
            this.setState(() => ({...INITIAL_STATE}));
            history.push(routes.HOME);
        })
        .catch(error => {
            this.state(byPropKey('error', error));
        });
        
        event.preventDefault();
    }

    render() {
        //Naming the local states
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        //Validation function by boolean. 
        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return (
            <Row>
                <Col s={4} className='Empty'></Col>
                    <Col s={4} className='SignUpFrom'>
                        <form onSubmit={this.onSubmit}>
                            <input 
                                value={username}
                                onChange={event => this.setState(byPropKey('username',event.target.value))}
                                type="text"
                                placeholder="Full Name"
                            />
                            <input 
                                value={email}
                                onChange={event => this.setState(byPropKey('email',event.target.value))}
                                type="text"
                                placeholder="Email Address"
                            />
                            <input 
                                value={passwordOne}
                                onChange={event => this.setState(byPropKey('passwordOne',event.target.value))}
                                type="text"
                                placeholder="Password"
                            />
                            <input 
                                value={passwordTwo}
                                onChange={event => this.setState(byPropKey('passwordTwo',event.target.value))}
                                type="text"
                                placeholder="Confirm Password"
                            />
                            <Button waves='light' disabled={isInvalid} type="submit">
                                Sign Up
                            </Button>    

                        { error && <p>{error.message}</p> }
                        </form>
                    </Col>
                <Col s={4} className='Empty'></Col>
            </Row>
        );
    }
}

const SignUpLink = () =>
    <p> 
        Don't have an account? 
        {' '}
        <Link to={routes.SIGN_UP}>Sign Up</Link>
    </p>


export default withRouter(SignUpPage);

export {
    SignUpForm,
    SignUpLink,
};