import firebase from 'firebase/app';
import 'firebase/messaging';

const config = {
  apiKey: "AIzaSyCX_G6sPgcg7NyO5PrQXDWXZhxUobEBTjM",
  authDomain: "leadx-deb95.firebaseapp.com",
  projectId: "leadx-deb95",
  storageBucket: "leadx-deb95.appspot.com",
  messagingSenderId: "899847885093",
  appId: "1:899847885093:web:ce42e5f01fae8c2b2f4acc",
  measurementId: "G-DB0NZR3JJS"
};

firebase.initializeApp(config);

let messaging = null;

if (firebase.messaging.isSupported()) {
  messaging = firebase.messaging();
} else {
  console.log("no-support");
}


export const requestFirebaseNotificationPermission = () =>
  new Promise((resolve, reject) => {
    messaging
      .requestPermission()
      .then(() => messaging.getToken())
      .then((firebaseToken) => {
        resolve(firebaseToken);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });

export const test = firebase.messaging.isSupported() ? messaging : null;