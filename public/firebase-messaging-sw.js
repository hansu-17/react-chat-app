/* eslint-disable no-undef */

importScripts('https://www.gstatic.com/firebasejs/8.6.7/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.7/firebase-messaging.js');

firebase.initializeApp({
  apiKey: 'AIzaSyAbOqVCHM1oib0GwEIChdJmO1smW5BwgY4',
  authDomain: 'chat-app-2f602.firebaseapp.com',
  databaseURL: 'https://chat-app-2f602-default-rtdb.firebaseio.com',
  projectId: 'chat-app-2f602',
  storageBucket: 'chat-app-2f602.appspot.com',
  messagingSenderId: '704400879065',
  appId: '1:704400879065:web:096e7bb67dce1b77037dc8',
});

firebase.messaging();
