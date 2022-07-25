import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import MainNav from "./components/MainNav";
import Footer from "./components/Footer";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
// import User from "./components/user/User";
import reportWebVitals from './reportWebVitals';
import './index.css';
import './assets/css/font-awesome.min.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store={store}>
      <Router>
        <MainNav />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login />}/>
            {/* <Route path="/user" element={<User />}/> */}
          </Routes>
        <Footer />
      </Router>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
