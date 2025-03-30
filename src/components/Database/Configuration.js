import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9IlG5WT3OiFBRxcxLmIKz4ZmiUacRC8c",
  authDomain: "engoko-7c799.firebaseapp.com",
  projectId: "engoko-7c799",
  storageBucket: "engoko-7c799.appspot.com",
  messagingSenderId: "280169725335",
  appId: "1:280169725335:web:541b24274d2ae9e5d6d8d2",
  measurementId: "G-M51Q4K0T47",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };
