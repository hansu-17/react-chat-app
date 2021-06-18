const functions = require('firebase-functions');

const admin = require('firebase-admin');

const serviceAccount = require('./service-accout.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://chat-app-2f602-default-rtdb.firebaseio.com',
});

const { sendFcm } = require('./src/fcm');

exports.sendFcm = sendFcm;
