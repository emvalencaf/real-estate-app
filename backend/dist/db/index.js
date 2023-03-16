"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.firebaseApp = void 0;
// Import the functions you need from the SDKs you need
const app_1 = require("firebase/app");
const firestore_1 = require("firebase/firestore");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.DB_API_KEY,
    authDomain: process.env.DB_API_AUTH_DOMAIN,
    projectId: process.env.DB_API_PROJECT_ID,
    storageBucket: process.env.DB_API_STORAGE_BUCKET,
    messagingSenderId: process.env.DB_API_MESSAGING_SENDER_ID,
    appId: process.env.DB_API_APP_ID,
};
// Initialize Firebase
exports.firebaseApp = (0, app_1.initializeApp)(firebaseConfig);
exports.db = (0, firestore_1.getFirestore)(exports.firebaseApp);
console.log(exports.db);
