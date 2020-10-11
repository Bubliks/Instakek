import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './components/login-form/LoginForm';
import Header from "./components/header/header";
import {
    Route,
    Switch,
    BrowserRouter,
} from "react-router-dom";
import { RegistrationForm } from "./components/login-form/RegistrationForm";
import List from "./components/group-list/group-list";

const App: React.FC = () => {

  return (
      <BrowserRouter>
          <div className="App">
              <Header/>
              <div className='main'>
                  <div className='content'>
                      <Switch>
                          <Route exact path='/login'>
                              <LoginForm />
                          </Route>

                          <Route exact path='/registration'>
                              <RegistrationForm />
                          </Route>

                          <Route exact path='/news'>
                              <List />
                          </Route>
                      </Switch>
                  </div>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
