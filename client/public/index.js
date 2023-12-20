let popup = document.getElementById("popup")

function openPopup(){
	closeSignin();
	popup.classList.add("open-popup");
}

function closePopup(){
	popup.classList.remove("open-popup");
}

let signIn = document.getElementById("sign_in")

function openSignin(){
	closePopup();
	signIn.classList.add("open-sign_in")
}

function closeSignin(){
	signIn.classList.remove("open-sign_in")
}

/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/
