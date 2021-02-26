import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/login/login';
import SignUp from './pages/signup/signup';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Login /> */}
        <SignUp />
      </div>
      ;
    </BrowserRouter>
  );
}

export default App;
