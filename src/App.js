import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/login/login';
import SignUp from './pages/signup/signup';
import DashBoard from './pages/dashboard/dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Login /> */}
        {/* <SignUp /> */}
        <DashBoard />
      </div>
    </BrowserRouter>
  );
}

export default App;
