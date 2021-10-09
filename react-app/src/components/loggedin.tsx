import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { UserSession } from '../App';
import Content from './content';
import Header from './header';

interface LoggedInProps {
    updateLogin: (login: boolean) => void;
    userSession: UserSession;
    setUserSession: (userSession: UserSession) => void;
}

const LoggedIn = (props: LoggedInProps) => {
    return (
        <BrowserRouter>
            <Header />
            <Content  userSession={props.userSession} setUserSession={props.setUserSession} />
        </BrowserRouter>);
}
export default LoggedIn;

