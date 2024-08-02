importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);

const firebaseConfig = {
    apiKey: "AIzaSyDIFIcOtl838d8lPfCIdzi7L5S99a0DPt4",
    authDomain: "indigo-18a66.firebaseapp.com",
    projectId: "indigo-18a66",
    storageBucket: "indigo-18a66.appspot.com",
    messagingSenderId: "98126381743",
    appId: "1:98126381743:web:7d059791277587234f0a5a",
    measurementId: "G-J13GZMWNDF"
  };

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
