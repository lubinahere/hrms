import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/login';
import LoggedInComponent from './components/loggedin';

export interface UserSession {
  login: boolean;
  username?: string;
  punchInDateTime?: string;
  punchOutDateTime?: string;
}

function App() {
  const [userSession, setUserSession] = useState<UserSession>({ login: false });
  const updateLogin = (login: boolean) => {
    setUserSession({ ...userSession, login })
  }

  return (
    <div className="container">
      <div className="row">
        {userSession.login ? <LoggedInComponent
          updateLogin={updateLogin}
          userSession={userSession}
          setUserSession={setUserSession} /> :
          <LoginForm updateLogin={updateLogin} />}
      </div>
    </div>
  );
}
export default App;
