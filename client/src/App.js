import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './views/Homepage';
import QuizDetail from './views/QuizDetail';
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
            <Route path="/quizDetails" component={QuizDetail} />
            <Route path="/quizPortal" component={QuizPortal} />
            <Route path="/" component={Homepage} />
          </UserContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
