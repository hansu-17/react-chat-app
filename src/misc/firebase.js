import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyAbOqVCHM1oib0GwEIChdJmO1smW5BwgY4',
  authDomain: 'chat-app-2f602.firebaseapp.com',
  databaseURL: 'https://chat-app-2f602-default-rtdb.firebaseio.com',
  projectId: 'chat-app-2f602',
  storageBucket: 'chat-app-2f602.appspot.com',
  messagingSenderId: '704400879065',
  appId: '1:704400879065:web:096e7bb67dce1b77037dc8',
};

const app = firebase.initializeApp(config);

export const auth = app.auth();
export const database = app.database();
