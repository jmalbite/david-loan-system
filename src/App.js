import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './pages/login/login';
import SignUp from './pages/signup/signup';
import DashBoard from './pages/dashboard/dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <DashBoard />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
