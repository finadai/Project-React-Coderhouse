import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjdREx5pQWh_t1CwLVgpXG9kTZZ9TcpWQ",
  authDomain: "coderhouse-react-project-8b025.firebaseapp.com",
  projectId: "coderhouse-react-project-8b025",
  storageBucket: "coderhouse-react-project-8b025.appspot.com",
  messagingSenderId: "531005420785",
  appId: "1:531005420785:web:42f1bed0b011ad4bcca550"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
