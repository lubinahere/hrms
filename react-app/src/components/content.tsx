import { Route, Switch } from "react-router-dom";
import Attendance from "./attendance";
import Dailylogs from "./dailylogs";
import Leave from "./leave";
import Calendar from "./calendar"
import { UserSession } from "../App";
import Admin from "./admin";

interface ContentProps {
    userSession: UserSession;
    setUserSession: (userSession: UserSession) => void;
}

const Content = (props: ContentProps) => {
    return (
        <Switch>
            <Route exact path='/' > <Attendance  userSession={props.userSession} 
             setUserSession={props.setUserSession} /> 
            </Route>
            <Route path='/admin' component={Admin} />
            <Route path='/dailylogs' component={Dailylogs} />
            <Route path='/leave' component={Leave} />
            <Route path='/calendar' component={Calendar} />
        </Switch>)
}

export default Content;