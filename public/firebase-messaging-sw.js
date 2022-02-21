
self.addEventListener("notificationclick", function(event) {
});

importScripts("https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.24.0/firebase-messaging.js"
);
firebase.initializeApp({
  apiKey: "AIzaSyCX_G6sPgcg7NyO5PrQXDWXZhxUobEBTjM",
  authDomain: "leadx-deb95.firebaseapp.com",
  projectId: "leadx-deb95",
  storageBucket: "leadx-deb95.appspot.com",
  messagingSenderId: "899847885093",
  appId: "1:899847885093:web:ce42e5f01fae8c2b2f4acc",
  measurementId: "G-DB0NZR3JJS"
});
const messaging = firebase.messaging();

class CustomPushEvent extends Event {
  constructor(data) {
    super("push");

    Object.assign(this, data);
    this.custom = true;
  }
}

self.addEventListener("push", e => {
  if (e.custom) return;
  let oldData = e.data;
  let newEvent = new CustomPushEvent({
    data: {
      json() {
        let newData = oldData.json();
        newData._notification = newData.notification;
        delete newData.notification;
        return newData;
      }
    },
    waitUntil: e.waitUntil.bind(e)
  });
  e.stopImmediatePropagation();
  dispatchEvent(newEvent);
});

messaging.onBackgroundMessage(function(payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
});
