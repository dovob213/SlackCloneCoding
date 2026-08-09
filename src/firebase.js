// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7Y0_zUoK6yo24FH21cIZyYLQyQojmzdk",
    authDomain: "react-chat-app-bf3a0.firebaseapp.com",
    projectId: "react-chat-app-bf3a0",
    storageBucket: "react-chat-app-bf3a0.firebasestorage.app",
    messagingSenderId: "520314183088",
    appId: "1:520314183088:web:d49b2a4b5f1e9284d70a75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
