import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './components/login-form/login-form';
import GroupList from './components/group-list/group-list';
import Haader from './components/header/header';
import Header from "./components/header/header";

{/*<img src={logo} className="App-logo" alt="logo" />*/}

function App() {
  return (
    <div className="App">
        <Header/>
        <div className='main'>
            <div className='content'>
                <LoginForm />
            </div>
        </div>
    </div>
  );
}

export default App;
