
import { getApp, getApps, initializeApp } from "firebase/app";
import { getMessaging, getToken, isSupported } from "firebase/messaging";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDIFIcOtl838d8lPfCIdzi7L5S99a0DPt4",
    authDomain: "indigo-18a66.firebaseapp.com",
    projectId: "indigo-18a66",
    storageBucket: "indigo-18a66.appspot.com",
    messagingSenderId: "98126381743",
    appId: "1:98126381743:web:7d059791277587234f0a5a",
    measurementId: "G-J13GZMWNDF"
  };

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const messaging = async () => {
  const supported = await isSupported();
  return supported ? getMessaging(app) : null;
};

export const fetchToken = async () => {
  try {
    const fcmMessaging = await messaging();
    if (fcmMessaging) {
      const token = await getToken(fcmMessaging, {
        vapidKey: process.env.NEXT_PUBLIC_FIREBASE_FCM_VAPID_KEY,
      });
      return token;
    }
    return null;
  } catch (err) {
    console.error("An error occurred while fetching the token:", err);
    return null;
  }
};

export { app, messaging };