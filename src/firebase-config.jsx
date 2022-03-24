// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyDkhEA79crQ_OiVI1tzCdUMrXMZqsl3UXY",
    authDomain: "blog-arojodev.firebaseapp.com",
    projectId: "blog-arojodev",
    storageBucket: "blog-arojodev.appspot.com",
    messagingSenderId: "320517318927",
    appId: "1:320517318927:web:ae8255d4df85496c7a767a",
    measurementId: "G-5X57JRMK6D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

console.log("HelloWorld");
