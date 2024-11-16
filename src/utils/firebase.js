// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADCeTKHXqOJfQNzJQikRxsY0HYmqNwuAw",
  authDomain: "netflix-gpt-1f28a.firebaseapp.com",
  projectId: "netflix-gpt-1f28a",
  storageBucket: "netflix-gpt-1f28a.firebasestorage.app",
  messagingSenderId: "539545864124",
  appId: "1:539545864124:web:b54b6d86ad2b18309d4db9",
  measurementId: "G-M457V98XH0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
