import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from './SignOut';
import * as routes from '../constants/routes';
import Navbar from '../../node_modules/react-materialize/lib/Navbar';


const Navigation = ({authUser}) =>
<div>
    { authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
</div>

const NavigationAuth = () =>
    <Navbar brand='logo' className='center-align'>
        <ul>
            <li><Link to={routes.LANDING}>Landing</Link></li>
            <li><Link to={routes.HOME}>Home</Link></li>
            <li><Link to={routes.ACCOUNT}>Account</Link></li>
            <li><SignOutButton /></li>
        </ul>
    </Navbar>
const NavigationNonAuth = () =>
    <Navbar brand='logo' right>
        <ul>
            <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
            <li><Link to={routes.LANDING}>Landing</Link></li>
        </ul>
    </Navbar>


export default Navigation;