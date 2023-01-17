import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './components/App.js';
import Home from './components/home.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp.js';
import SignIn from './components/SignIn.js';
import Dashboard from './components/Dashboard.js';
import {createStore,applyMiddleware}  from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import authGuard from './components/HOCs/authGuard';
import Protected from './components/HOCs/Protected';
const jwtToken = localStorage.getItem('JWT_TOKEN');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={createStore(reducers,{
      auth:{
        token: jwtToken,
        isAuthenticated: jwtToken ? true : false
      }
    },applyMiddleware(reduxThunk))}>
      <BrowserRouter>
        <App>
          <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/signup' element={<SignUp/>} />
          <Route exact path='/signIn' element={<SignIn/>} />
          <Route exact path='/dashboard' element={<Dashboard/>} />
          </Routes>
        </App>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
