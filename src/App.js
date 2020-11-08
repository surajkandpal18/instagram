import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './components/SignInSignUp/login';
import { ThemeProvider } from '@material-ui/core';
import { myTheme } from './components/theme/theme';
import Header from './components/header/header';
import { useStateValue } from './components/context/global-state';
import SignUp from './components/SignInSignUp/sign-up';

function App() {
  const [{user},dispatch]=useStateValue()
  return (
    <ThemeProvider theme={myTheme}>
    <div className="App" style={{width:'100vw',height:'100vh'}}>
    {user===null?null:<Header/>}
      <Switch>
      {user===null?<Route exact path='/login' component={Login}/>:<Redirect to='/' />}
      {user===null?<Route exact path='/signup' component={SignUp}/>:<Redirect to='/' />}
    
      </Switch>
    </div>
    </ThemeProvider>
  );
}

export default App;
