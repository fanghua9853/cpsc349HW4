//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
(function (window) {
    'use strict';
     var App = window.App || {};
    
      window.FirebaseConfig = {
        apiKey: "AIzaSyB81Yih1XMaAAD72zR6W3pxASKFeTVYi88",
        authDomain: "coffeerun-3cfd3.firebaseapp.com",
        projectId: "coffeerun-3cfd3",
        storageBucket: "coffeerun-3cfd3.appspot.com",
        messagingSenderId: "863483453738",
        appId: "1:863483453738:web:72516d107bfdce4afa7e53",
        measurementId: "G-H3Y35Y0TPL"
      };
     App.FirebaseConfig = FirebaseConfig;
     firebase.initializeApp(App.FirebaseConfig);
     window.App = App;
  
  })(window);