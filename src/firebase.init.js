// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4m_c_ucgiUND8ySQtGN_-8uUfqCKG7qQ",
    authDomain: "independence-service-provider.firebaseapp.com",
    projectId: "independence-service-provider",
    storageBucket: "independence-service-provider.appspot.com",
    messagingSenderId: "36132263874",
    appId: "1:36132263874:web:a0819f5efd57b54e6ce85b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

