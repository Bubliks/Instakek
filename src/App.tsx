import React, {useState} from 'react';
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
import { Profile } from "./components/Profile/Profile";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import {Admin} from "./components/Admin/Admin";

const CreatePublication: React.FC = () => {
    return (
        <Form className='reg-form-pub'>
            <div className='login-title'>
                <h2><span className='first-symbol'>C</span>reate new publication</h2>
            </div>
            <textarea className='text-area' placeholder='whats happened...' />
            <Form.Group>
                <span className='publication_new'>Upload new photo</span>
                <Form.Control pattern='^https?://\S+(?:jpg|jpeg|png)$' required type="text" placeholder="insert a link to the image" />
            </Form.Group>
            <Button type='submit' className='new-pub-button' variant="primary">
                Create
            </Button>
        </Form>
    )
}


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

                          <Route exact path='/'>
                              <List />
                          </Route>

                          <Route exact path='/profile'>
                              <Profile />
                          </Route>

                          <Route exact path='/create'>
                              <CreatePublication />
                          </Route>

                          <Route exact path='/admin'>
                              <Admin />
                          </Route>
                      </Switch>
                  </div>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
