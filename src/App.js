import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/login/login';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Login />
      </div>
      ;
    </BrowserRouter>
  );
}

export default App;
