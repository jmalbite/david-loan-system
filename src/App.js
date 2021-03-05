import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './pages/login/login';
import SignUp from './pages/signup/signup';
import Dashboard from './pages/dashboard/dashboard';
import NavBar from './components/navbar/navbar';
import AddPayment from './pages/addpayment/addpayment';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>

          <Route path="/dashboard">
            <Dashboard />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/addpayment">
            <AddPayment />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
