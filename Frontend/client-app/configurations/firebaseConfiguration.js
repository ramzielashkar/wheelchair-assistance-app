import { getApp, initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCYRwRgzCv3k1Ma8lRh9adAMS8XcBKR5jo",
    authDomain: "wheelchair-assistance-app.firebaseapp.com",
    projectId: "wheelchair-assistance-app",
    storageBucket: "wheelchair-assistance-app.appspot.com",
    messagingSenderId: "150466773323",
    appId: "1:150466773323:web:f4152cf0ca7d62962fa8ce",
    measurementId: "G-4NRJVSP24X"
  };

const app = initializeApp(firebaseConfig);
export const firebaseDB = getDatabase(app);
