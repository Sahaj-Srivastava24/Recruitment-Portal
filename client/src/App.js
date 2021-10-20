import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './views/Homepage';
import QuizDetail from './views/QuizDetail';
import Register from './views/Register';
import Signin from './views/Signin';
import QuizPortal from './views/QuizPortal';
import UserContext from './component/UserContext';
import ProtectedRoute from './component/ProtectedRoute';


function App() {
  const [ user, setUser ] = useState({
    login:false,
    userId: null,
    user: null
  })

  const userMemo = useMemo( () => ({ user, setUser }) , [ user ])
  return (
    <div className="App">
      <Router>
        <Switch>
          <UserContext.Provider value={ userMemo }>
            <Route path="/signin" component={Signin} />
            <Route path="/register" component={Register} />
            <ProtectedRoute path="/quizDetails" component={QuizDetail} />
            <ProtectedRoute path="/quizPortal" component={QuizPortal} />
            <Route exact path="/" component={ Homepage } />
          </UserContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
