import React, { useEffect } from 'react';

import './App.css';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import Login from './components/SignInSignUp/login';
import { ThemeProvider } from '@material-ui/core';
import { myTheme } from './components/theme/theme';
import Header from './components/header/header';
import { useStateValue } from './components/context/global-state';
import SignUp from './components/SignInSignUp/sign-up';
import { actionTypes } from './components/context/reducer';
import PostFeed from './components/posts/post-feed';

function App() {
  const [{user},dispatch]=useStateValue()
  const history=useHistory();

  useEffect(() => {
    let myuser=JSON.parse(window.localStorage.getItem('user')||null);
    if(myuser===null){
     history.push('/login')
    }
    else{
       dispatch({type:actionTypes.SET_USER,payload:myuser})
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ThemeProvider theme={myTheme}>
    <div className="App" style={{width:'100vw',height:'100vh'}}>
    {user===null?null:<Header/>}
      <Switch>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/signup' component={SignUp}/>
       
           <Route exact path='/' component={PostFeed}/>
        
    
      </Switch>
    </div>
    </ThemeProvider>
  );
}

export default App;
