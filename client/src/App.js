import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './views/Homepage';
import QuizDetail from './views/QuizDetail';
import Register from './views/Register';
import Signin from './views/Signin';
import QuizPortal from './views/QuizPortal';
import UserContext from './component/UserContext';


function App() {
  const [ user, setUser ] = useState({
    login:false,
    userId: null,
    user: null
  })
  return (
    <div className="App">
      <Router>
        <Switch>
          <UserContext.Provider value={{ user, setUser }}>
            <Route path="/signin" component={Signin} />
            <Route path="/register" component={Register} />
            <Route path="/quizDetails" component={QuizDetail} />
            <Route path="/quizPortal" component={QuizPortal} />
            <Route exact path="/" component={ Homepage } />
          </UserContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
